const prisma = require("../config/db");

// ==========================================
// SUPPORTED PLATFORMS
// ==========================================

const SUPPORTED_PLATFORMS = [
  "INSTAGRAM",
  "YOUTUBE",
  "FACEBOOK",
];

// ==========================================
// HELPERS
// ==========================================

const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

const detectPlatform = (url) => {
  if (!url) return null;

  const value = url.toLowerCase();

  if (
    value.includes("instagram.com") ||
    value.includes("instagr.am")
  ) {
    return "INSTAGRAM";
  }

  if (
    value.includes("youtube.com") ||
    value.includes("youtu.be")
  ) {
    return "YOUTUBE";
  }

  if (
    value.includes("facebook.com") ||
    value.includes("fb.watch")
  ) {
    return "FACEBOOK";
  }

  return null;
};

const normalizePlatform = (platform) => {
  if (!platform) return null;

  const value = String(platform)
    .toUpperCase()
    .trim();

  if (SUPPORTED_PLATFORMS.includes(value)) {
    return value;
  }

  return null;
};

// ==========================================
// GET ALL SOCIAL POSTS
// GET /api/social-posts
// ADMIN
// ==========================================

const getAllSocialPosts = async (req, res) => {
  try {
    const posts = await prisma.socialPost.findMany({
      orderBy: [
        {
          sortOrder: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error(
      "Get all social posts error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch social posts",
    });
  }
};

// ==========================================
// GET PUBLISHED SOCIAL POSTS
// GET /api/social-posts/published
// PUBLIC
// ==========================================

const getPublishedSocialPosts = async (
  req,
  res
) => {
  try {
    const limit = Math.min(
      Math.max(
        parseInt(req.query.limit, 10) || 6,
        1
      ),
      30
    );

    const posts = await prisma.socialPost.findMany({
      where: {
        isPublished: true,
      },

      orderBy: [
        {
          sortOrder: "asc",
        },
        {
          createdAt: "desc",
        },
      ],

      take: limit,
    });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error(
      "Get published social posts error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch published social posts",
    });
  }
};

// ==========================================
// GET SOCIAL POST BY ID
// GET /api/social-posts/:id
// ADMIN
// ==========================================

const getSocialPostById = async (
  req,
  res
) => {
  try {
    const socialPostId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        socialPostId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid social post ID",
      });
    }

    const post =
      await prisma.socialPost.findUnique({
        where: {
          id: socialPostId,
        },
      });

    if (!post) {
      return res.status(404).json({
        success: false,
        message:
          "Social post not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(
      "Get social post error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch social post",
    });
  }
};

// ==========================================
// CREATE SOCIAL POST
// POST /api/social-posts
// ADMIN
// ==========================================

const createSocialPost = async (
  req,
  res
) => {
  try {
    const {
      platform,
      url,
      isPublished,
      sortOrder,
    } = req.body;

    // ======================================
    // URL VALIDATION
    // ======================================

    if (!url?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Social media URL is required",
      });
    }

    const cleanUrl =
      url.trim();

    if (!isValidUrl(cleanUrl)) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a valid social media URL",
      });
    }

    // ======================================
    // PLATFORM
    // ======================================

    const detectedPlatform =
      detectPlatform(cleanUrl);

    const selectedPlatform =
      normalizePlatform(platform);

    const finalPlatform =
      selectedPlatform ||
      detectedPlatform;

    if (!finalPlatform) {
      return res.status(400).json({
        success: false,
        message:
          "Only Instagram, YouTube and Facebook URLs are supported",
      });
    }

    // ======================================
    // PLATFORM MATCH
    // ======================================

    if (
      selectedPlatform &&
      detectedPlatform &&
      selectedPlatform !==
        detectedPlatform
    ) {
      return res.status(400).json({
        success: false,
        message:
          `The selected platform (${selectedPlatform}) does not match the provided URL`,
      });
    }

    // ======================================
    // DUPLICATE URL
    // ======================================

    const existingPost =
      await prisma.socialPost.findFirst({
        where: {
          url: cleanUrl,
        },
      });

    if (existingPost) {
      return res.status(409).json({
        success: false,
        message:
          "This social media URL has already been added",
      });
    }

    // ======================================
    // CREATED BY
    // ======================================

    const createdById =
      Number(req.user?.id);

    if (
      !Number.isInteger(
        createdById
      )
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Authenticated admin user is required",
      });
    }

    // ======================================
    // SORT ORDER
    // ======================================

    let finalSortOrder;

    if (
      sortOrder !== undefined &&
      sortOrder !== null &&
      sortOrder !== ""
    ) {
      finalSortOrder =
        Number(sortOrder);

      if (
        !Number.isInteger(
          finalSortOrder
        ) ||
        finalSortOrder < 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Sort order must be a non-negative number",
        });
      }
    } else {
      const lastPost =
        await prisma.socialPost.findFirst({
          orderBy: {
            sortOrder: "desc",
          },
          select: {
            sortOrder: true,
          },
        });

      finalSortOrder =
        lastPost
          ? lastPost.sortOrder + 1
          : 0;
    }

    // ======================================
    // CREATE
    // ======================================

    const post =
      await prisma.socialPost.create({
        data: {
          platform:
            finalPlatform,

          url:
            cleanUrl,

          isPublished:
            isPublished !== undefined
              ? Boolean(isPublished)
              : true,

          sortOrder:
            finalSortOrder,

          createdById:
            createdById,
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "Social post added successfully",
      data: post,
    });
  } catch (error) {
    console.error(
      "Create social post error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to create social post",
    });
  }
};

// ==========================================
// UPDATE SOCIAL POST
// PUT /api/social-posts/:id
// ADMIN
// ==========================================

const updateSocialPost = async (
  req,
  res
) => {
  try {
    const socialPostId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        socialPostId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid social post ID",
      });
    }

    // ======================================
    // FIND EXISTING
    // ======================================

    const existingPost =
      await prisma.socialPost.findUnique({
        where: {
          id: socialPostId,
        },
      });

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message:
          "Social post not found",
      });
    }

    const {
      platform,
      url,
      isPublished,
      sortOrder,
    } = req.body;

    // ======================================
    // URL
    // ======================================

    const cleanUrl =
      url !== undefined
        ? String(url).trim()
        : existingPost.url;

    if (!cleanUrl) {
      return res.status(400).json({
        success: false,
        message:
          "Social media URL is required",
      });
    }

    if (!isValidUrl(cleanUrl)) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a valid social media URL",
      });
    }

    // ======================================
    // PLATFORM
    // ======================================

    const detectedPlatform =
      detectPlatform(cleanUrl);

    const selectedPlatform =
      platform !== undefined
        ? normalizePlatform(platform)
        : existingPost.platform;

    if (!selectedPlatform) {
      return res.status(400).json({
        success: false,
        message:
          "Only Instagram, YouTube and Facebook are supported",
      });
    }

    // ======================================
    // PLATFORM MATCH
    // ======================================

    if (
      detectedPlatform &&
      selectedPlatform !==
        detectedPlatform
    ) {
      return res.status(400).json({
        success: false,
        message:
          `The selected platform (${selectedPlatform}) does not match the provided URL`,
      });
    }

    // ======================================
    // DUPLICATE URL
    // ======================================

    if (
      cleanUrl !==
      existingPost.url
    ) {
      const duplicate =
        await prisma.socialPost.findFirst({
          where: {
            url: cleanUrl,
            NOT: {
              id: socialPostId,
            },
          },
        });

      if (duplicate) {
        return res.status(409).json({
          success: false,
          message:
            "This social media URL has already been added",
        });
      }
    }

    // ======================================
    // SORT ORDER
    // ======================================

    let finalSortOrder =
      existingPost.sortOrder;

    if (
      sortOrder !== undefined &&
      sortOrder !== null &&
      sortOrder !== ""
    ) {
      finalSortOrder =
        Number(sortOrder);

      if (
        !Number.isInteger(
          finalSortOrder
        ) ||
        finalSortOrder < 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Sort order must be a non-negative number",
        });
      }
    }

    // ======================================
    // UPDATE DATA
    // ======================================

    const updateData = {
      platform:
        selectedPlatform,

      url:
        cleanUrl,

      sortOrder:
        finalSortOrder,
    };

    if (
      isPublished !== undefined
    ) {
      updateData.isPublished =
        Boolean(isPublished);
    }

    // ======================================
    // UPDATE
    // ======================================

    const post =
      await prisma.socialPost.update({
        where: {
          id: socialPostId,
        },

        data: updateData,
      });

    return res.status(200).json({
      success: true,
      message:
        "Social post updated successfully",
      data: post,
    });
  } catch (error) {
    console.error(
      "Update social post error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update social post",
    });
  }
};

// ==========================================
// DELETE SOCIAL POST
// DELETE /api/social-posts/:id
// ADMIN
// ==========================================

const deleteSocialPost = async (
  req,
  res
) => {
  try {
    const socialPostId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        socialPostId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid social post ID",
      });
    }

    // ======================================
    // FIND
    // ======================================

    const existingPost =
      await prisma.socialPost.findUnique({
        where: {
          id: socialPostId,
        },
      });

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message:
          "Social post not found",
      });
    }

    // ======================================
    // DELETE
    // ======================================

    await prisma.socialPost.delete({
      where: {
        id: socialPostId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Social post deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete social post error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete social post",
    });
  }
};

// ==========================================
// TOGGLE PUBLISH
// PATCH /api/social-posts/:id/publish
// ADMIN
// ==========================================

const togglePublishSocialPost = async (
  req,
  res
) => {
  try {
    const socialPostId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        socialPostId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid social post ID",
      });
    }

    // ======================================
    // FIND
    // ======================================

    const existingPost =
      await prisma.socialPost.findUnique({
        where: {
          id: socialPostId,
        },
      });

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message:
          "Social post not found",
      });
    }

    // ======================================
    // TOGGLE
    // ======================================

    const post =
      await prisma.socialPost.update({
        where: {
          id: socialPostId,
        },

        data: {
          isPublished:
            !existingPost.isPublished,
        },
      });

    return res.status(200).json({
      success: true,
      message:
        post.isPublished
          ? "Social post published successfully"
          : "Social post unpublished successfully",
      data: post,
    });
  } catch (error) {
    console.error(
      "Toggle social post publish error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update social post status",
    });
  }
};

// ==========================================
// REORDER SOCIAL POSTS
// PATCH /api/social-posts/reorder
// ADMIN
// ==========================================

const reorderSocialPosts = async (
  req,
  res
) => {
  try {
    const { items } =
      req.body;

    if (
      !Array.isArray(items) ||
      !items.length
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Reorder items are required",
      });
    }

    // ======================================
    // VALIDATION
    // ======================================

    for (const item of items) {
      const id =
        Number(item.id);

      const sortOrder =
        Number(item.sortOrder);

      if (
        !Number.isInteger(id) ||
        !Number.isInteger(
          sortOrder
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Each reorder item must contain a valid id and sortOrder",
        });
      }

      if (sortOrder < 0) {
        return res.status(400).json({
          success: false,
          message:
            "Sort order cannot be negative",
        });
      }
    }

    // ======================================
    // UPDATE ORDER
    // ======================================

    await prisma.$transaction(
      items.map((item) =>
        prisma.socialPost.update({
          where: {
            id: Number(item.id),
          },

          data: {
            sortOrder:
              Number(item.sortOrder),
          },
        })
      )
    );

    // ======================================
    // RETURN UPDATED POSTS
    // ======================================

    const posts =
      await prisma.socialPost.findMany({
        orderBy: [
          {
            sortOrder: "asc",
          },
          {
            createdAt: "desc",
          },
        ],
      });

    return res.status(200).json({
      success: true,
      message:
        "Social posts reordered successfully",
      data: posts,
    });
  } catch (error) {
    console.error(
      "Reorder social posts error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to reorder social posts",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllSocialPosts,
  getPublishedSocialPosts,
  getSocialPostById,
  createSocialPost,
  updateSocialPost,
  deleteSocialPost,
  togglePublishSocialPost,
  reorderSocialPosts,
};
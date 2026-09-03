const prisma = require("../config/db");

// ==========================================
// GET ALL NEWS
// GET /api/news
// ==========================================

const getAllNews = async (req, res) => {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    console.error("Get all news error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    });
  }
};

// ==========================================
// GET PUBLISHED NEWS
// GET /api/news/published
// ==========================================

const getPublishedNews = async (req, res) => {
  try {
    const news = await prisma.news.findMany({
      where: {
        isPublished: true,
      },
      orderBy: [
        {
          publishedAt: "desc",
        },
        {
          createdAt: "desc",
        },
      ],
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    console.error("Get published news error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch published news",
    });
  }
};

// ==========================================
// GET NEWS BY SLUG
// GET /api/news/:slug
// ==========================================

const getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const news = await prisma.news.findUnique({
      where: {
        slug,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("Get news by slug error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    });
  }
};

// ==========================================
// CREATE NEWS
// POST /api/news
// ==========================================

const createNews = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      isPublished,
      publishedAt,
    } = req.body;

    // ------------------------------------------
    // Validation
    // ------------------------------------------

    if (!title || !slug || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, slug and content are required",
      });
    }

    // ------------------------------------------
    // Check duplicate slug
    // ------------------------------------------

    const existingNews = await prisma.news.findUnique({
      where: {
        slug: slug.trim(),
      },
    });

    if (existingNews) {
      return res.status(409).json({
        success: false,
        message: "A news article with this slug already exists",
      });
    }

    // ------------------------------------------
    // Create news
    // ------------------------------------------

    const news = await prisma.news.create({
      data: {
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt?.trim() || null,
        content,
        image: image?.trim() || null,
        category: category?.trim() || null,
        isPublished: Boolean(isPublished),
        publishedAt:
          isPublished && publishedAt
            ? new Date(publishedAt)
            : isPublished
              ? new Date()
              : null,
        authorId: req.user.id,
      },

      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(201).json({
      success: true,
      message: "News created successfully",
      data: news,
    });
  } catch (error) {
    console.error("Create news error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create news",
    });
  }
};

// ==========================================
// UPDATE NEWS
// PUT /api/news/:id
// ==========================================

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      isPublished,
      publishedAt,
    } = req.body;

    const newsId = Number(id);

    if (!Number.isInteger(newsId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid news ID",
      });
    }

    // ------------------------------------------
    // Find existing news
    // ------------------------------------------

    const existingNews = await prisma.news.findUnique({
      where: {
        id: newsId,
      },
    });

    if (!existingNews) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    // ------------------------------------------
    // Check slug conflict
    // ------------------------------------------

    if (slug && slug.trim() !== existingNews.slug) {
      const slugExists = await prisma.news.findUnique({
        where: {
          slug: slug.trim(),
        },
      });

      if (slugExists && slugExists.id !== newsId) {
        return res.status(409).json({
          success: false,
          message: "A news article with this slug already exists",
        });
      }
    }

    // ------------------------------------------
    // Prepare update
    // ------------------------------------------

    const updateData = {};

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (slug !== undefined) {
      updateData.slug = slug.trim();
    }

    if (excerpt !== undefined) {
      updateData.excerpt = excerpt?.trim() || null;
    }

    if (content !== undefined) {
      updateData.content = content;
    }

    if (image !== undefined) {
      updateData.image = image?.trim() || null;
    }

    if (category !== undefined) {
      updateData.category = category?.trim() || null;
    }

    if (isPublished !== undefined) {
      updateData.isPublished = Boolean(isPublished);

      if (Boolean(isPublished) && !existingNews.publishedAt) {
        updateData.publishedAt = new Date();
      }

      if (!Boolean(isPublished)) {
        updateData.publishedAt = null;
      }
    }

    if (publishedAt !== undefined) {
      updateData.publishedAt = publishedAt
        ? new Date(publishedAt)
        : null;
    }

    // ------------------------------------------
    // Update news
    // ------------------------------------------

    const news = await prisma.news.update({
      where: {
        id: newsId,
      },

      data: updateData,

      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error) {
    console.error("Update news error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update news",
    });
  }
};

// ==========================================
// DELETE NEWS
// DELETE /api/news/:id
// ==========================================

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const newsId = Number(id);

    if (!Number.isInteger(newsId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid news ID",
      });
    }

    const existingNews = await prisma.news.findUnique({
      where: {
        id: newsId,
      },
    });

    if (!existingNews) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    await prisma.news.delete({
      where: {
        id: newsId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    console.error("Delete news error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete news",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllNews,
  getPublishedNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
};
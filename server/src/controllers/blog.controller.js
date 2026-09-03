const prisma = require("../config/db");

// ==========================================
// GET ALL BLOGS
// GET /api/blogs
// ADMIN
// ==========================================

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
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
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error("Get all blogs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

// ==========================================
// GET PUBLISHED BLOGS
// GET /api/blogs/published
// PUBLIC
// ==========================================

const getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
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
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error("Get published blogs error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch published blogs",
    });
  }
};

// ==========================================
// GET BLOG BY SLUG
// GET /api/blogs/:slug
// PUBLIC
// ==========================================

const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await prisma.blog.findUnique({
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

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get blog by slug error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};

// ==========================================
// CREATE BLOG
// POST /api/blogs
// ADMIN
// ==========================================

const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      authorName,
      metaTitle,
      metaDescription,
      keywords,
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

    const existingBlog = await prisma.blog.findUnique({
      where: {
        slug: slug.trim(),
      },
    });

    if (existingBlog) {
      return res.status(409).json({
        success: false,
        message: "A blog with this slug already exists",
      });
    }

    // ------------------------------------------
    // Prepare published date
    // ------------------------------------------

    let finalPublishedAt = null;

    if (isPublished === true) {
      finalPublishedAt = publishedAt
        ? new Date(publishedAt)
        : new Date();
    }

    // ------------------------------------------
    // Create blog
    // ------------------------------------------

    const blog = await prisma.blog.create({
      data: {
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt?.trim() || null,
        content,
        featuredImage: featuredImage?.trim() || null,
        category: category?.trim() || null,
        authorName: authorName?.trim() || null,
        metaTitle: metaTitle?.trim() || null,
        metaDescription: metaDescription?.trim() || null,
        keywords: keywords?.trim() || null,
        isPublished: isPublished === true,
        publishedAt: finalPublishedAt,

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
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Create blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create blog",
    });
  }
};

// ==========================================
// UPDATE BLOG
// PUT /api/blogs/:id
// ADMIN
// ==========================================

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      authorName,
      metaTitle,
      metaDescription,
      keywords,
      isPublished,
      publishedAt,
    } = req.body;

    const blogId = Number(id);

    if (!Number.isInteger(blogId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    // ------------------------------------------
    // Find blog
    // ------------------------------------------

    const existingBlog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // ------------------------------------------
    // Check slug conflict
    // ------------------------------------------

    if (
      slug !== undefined &&
      slug.trim() !== existingBlog.slug
    ) {
      const slugExists = await prisma.blog.findUnique({
        where: {
          slug: slug.trim(),
        },
      });

      if (slugExists && slugExists.id !== blogId) {
        return res.status(409).json({
          success: false,
          message: "A blog with this slug already exists",
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

    if (featuredImage !== undefined) {
      updateData.featuredImage =
        featuredImage?.trim() || null;
    }

    if (category !== undefined) {
      updateData.category = category?.trim() || null;
    }

    if (authorName !== undefined) {
      updateData.authorName =
        authorName?.trim() || null;
    }

    if (metaTitle !== undefined) {
      updateData.metaTitle =
        metaTitle?.trim() || null;
    }

    if (metaDescription !== undefined) {
      updateData.metaDescription =
        metaDescription?.trim() || null;
    }

    if (keywords !== undefined) {
      updateData.keywords =
        keywords?.trim() || null;
    }

    // ------------------------------------------
    // Publication status
    // ------------------------------------------

    if (isPublished !== undefined) {
      updateData.isPublished = isPublished === true;

      if (isPublished === true) {
        updateData.publishedAt =
          publishedAt
            ? new Date(publishedAt)
            : existingBlog.publishedAt || new Date();
      } else {
        updateData.publishedAt = null;
      }
    } else if (publishedAt !== undefined) {
      updateData.publishedAt = publishedAt
        ? new Date(publishedAt)
        : null;
    }

    // ------------------------------------------
    // Update
    // ------------------------------------------

    const blog = await prisma.blog.update({
      where: {
        id: blogId,
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
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Update blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update blog",
    });
  }
};

// ==========================================
// DELETE BLOG
// DELETE /api/blogs/:id
// ADMIN
// ==========================================

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blogId = Number(id);

    if (!Number.isInteger(blogId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const existingBlog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete blog error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllBlogs,
  getPublishedBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
};
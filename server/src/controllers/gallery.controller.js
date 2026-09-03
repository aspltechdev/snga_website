// const prisma = require("../config/db");

// // ==========================================
// // GET ALL ALBUMS
// // GET /api/gallery
// // ADMIN
// // ==========================================

// const getAllAlbums = async (req, res) => {
//   try {
//     const albums = await prisma.galleryAlbum.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         images: {
//           orderBy: {
//             createdAt: "asc",
//           },
//         },
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: albums.length,
//       data: albums,
//     });
//   } catch (error) {
//     console.error("Get all gallery albums error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch gallery albums",
//     });
//   }
// };

// // ==========================================
// // GET PUBLISHED ALBUMS
// // GET /api/gallery/published
// // PUBLIC
// // ==========================================

// const getPublishedAlbums = async (req, res) => {
//   try {
//     const albums = await prisma.galleryAlbum.findMany({
//       where: {
//         isPublished: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         images: {
//           orderBy: {
//             createdAt: "asc",
//           },
//         },
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: albums.length,
//       data: albums,
//     });
//   } catch (error) {
//     console.error("Get published gallery albums error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch published gallery",
//     });
//   }
// };

// // ==========================================
// // GET ALBUM BY SLUG
// // GET /api/gallery/:slug
// // PUBLIC
// // ==========================================

// const getAlbumBySlug = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const album = await prisma.galleryAlbum.findUnique({
//       where: {
//         slug,
//       },
//       include: {
//         images: {
//           orderBy: {
//             createdAt: "asc",
//           },
//         },
//       },
//     });

//     if (!album) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery album not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: album,
//     });
//   } catch (error) {
//     console.error("Get gallery album error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch gallery album",
//     });
//   }
// };

// // ==========================================
// // CREATE ALBUM
// // POST /api/gallery/albums
// // ADMIN
// // ==========================================

// const createAlbum = async (req, res) => {
//   try {
//     const {
//       title,
//       slug,
//       description,
//       coverImage,
//       category,
//       isPublished,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!title || !slug) {
//       return res.status(400).json({
//         success: false,
//         message: "Title and slug are required",
//       });
//     }

//     // ------------------------------------------
//     // Check duplicate slug
//     // ------------------------------------------

//     const existingAlbum = await prisma.galleryAlbum.findUnique({
//       where: {
//         slug: slug.trim(),
//       },
//     });

//     if (existingAlbum) {
//       return res.status(409).json({
//         success: false,
//         message: "An album with this slug already exists",
//       });
//     }

//     // ------------------------------------------
//     // Create album
//     // ------------------------------------------

//     const album = await prisma.galleryAlbum.create({
//       data: {
//         title: title.trim(),
//         slug: slug.trim(),
//         description: description?.trim() || null,
//         coverImage: coverImage?.trim() || null,
//         category: category?.trim() || null,
//         isPublished: isPublished === true,
//       },
//       include: {
//         images: true,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Gallery album created successfully",
//       data: album,
//     });
//   } catch (error) {
//     console.error("Create gallery album error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create gallery album",
//     });
//   }
// };

// // ==========================================
// // UPDATE ALBUM
// // PUT /api/gallery/albums/:id
// // ADMIN
// // ==========================================

// const updateAlbum = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const {
//       title,
//       slug,
//       description,
//       coverImage,
//       category,
//       isPublished,
//     } = req.body;

//     const albumId = Number(id);

//     if (!Number.isInteger(albumId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid album ID",
//       });
//     }

//     // ------------------------------------------
//     // Find album
//     // ------------------------------------------

//     const existingAlbum = await prisma.galleryAlbum.findUnique({
//       where: {
//         id: albumId,
//       },
//     });

//     if (!existingAlbum) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery album not found",
//       });
//     }

//     // ------------------------------------------
//     // Check slug conflict
//     // ------------------------------------------

//     if (
//       slug !== undefined &&
//       slug.trim() !== existingAlbum.slug
//     ) {
//       const slugExists = await prisma.galleryAlbum.findUnique({
//         where: {
//           slug: slug.trim(),
//         },
//       });

//       if (slugExists && slugExists.id !== albumId) {
//         return res.status(409).json({
//           success: false,
//           message: "An album with this slug already exists",
//         });
//       }
//     }

//     // ------------------------------------------
//     // Prepare update
//     // ------------------------------------------

//     const updateData = {};

//     if (title !== undefined) {
//       updateData.title = title.trim();
//     }

//     if (slug !== undefined) {
//       updateData.slug = slug.trim();
//     }

//     if (description !== undefined) {
//       updateData.description =
//         description?.trim() || null;
//     }

//     if (coverImage !== undefined) {
//       updateData.coverImage =
//         coverImage?.trim() || null;
//     }

//     if (category !== undefined) {
//       updateData.category =
//         category?.trim() || null;
//     }

//     if (isPublished !== undefined) {
//       updateData.isPublished = isPublished === true;
//     }

//     // ------------------------------------------
//     // Update album
//     // ------------------------------------------

//     const album = await prisma.galleryAlbum.update({
//       where: {
//         id: albumId,
//       },

//       data: updateData,

//       include: {
//         images: true,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Gallery album updated successfully",
//       data: album,
//     });
//   } catch (error) {
//     console.error("Update gallery album error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update gallery album",
//     });
//   }
// };

// // ==========================================
// // DELETE ALBUM
// // DELETE /api/gallery/albums/:id
// // ADMIN
// // ==========================================

// const deleteAlbum = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const albumId = Number(id);

//     if (!Number.isInteger(albumId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid album ID",
//       });
//     }

//     const existingAlbum = await prisma.galleryAlbum.findUnique({
//       where: {
//         id: albumId,
//       },
//     });

//     if (!existingAlbum) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery album not found",
//       });
//     }

//     await prisma.galleryAlbum.delete({
//       where: {
//         id: albumId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Gallery album deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete gallery album error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete gallery album",
//     });
//   }
// };

// // ==========================================
// // ADD IMAGE
// // POST /api/gallery/albums/:albumId/images
// // ADMIN
// // ==========================================

// const addImage = async (req, res) => {
//   try {
//     const { albumId } = req.params;

//     const {
//       imageUrl,
//       title,
//       description,
//       altText,
//     } = req.body;

//     const parsedAlbumId = Number(albumId);

//     if (!Number.isInteger(parsedAlbumId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid album ID",
//       });
//     }

//     if (!imageUrl) {
//       return res.status(400).json({
//         success: false,
//         message: "Image URL is required",
//       });
//     }

//     // ------------------------------------------
//     // Check album
//     // ------------------------------------------

//     const album = await prisma.galleryAlbum.findUnique({
//       where: {
//         id: parsedAlbumId,
//       },
//     });

//     if (!album) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery album not found",
//       });
//     }

//     // ------------------------------------------
//     // Create image
//     // ------------------------------------------

//     const image = await prisma.galleryImage.create({
//       data: {
//         imageUrl: imageUrl.trim(),
//         title: title?.trim() || null,
//         description: description?.trim() || null,
//         altText: altText?.trim() || null,
//         albumId: parsedAlbumId,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Gallery image added successfully",
//       data: image,
//     });
//   } catch (error) {
//     console.error("Add gallery image error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to add gallery image",
//     });
//   }
// };

// // ==========================================
// // UPDATE IMAGE
// // PUT /api/gallery/images/:id
// // ADMIN
// // ==========================================

// const updateImage = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const {
//       imageUrl,
//       title,
//       description,
//       altText,
//     } = req.body;

//     const imageId = Number(id);

//     if (!Number.isInteger(imageId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid image ID",
//       });
//     }

//     const existingImage = await prisma.galleryImage.findUnique({
//       where: {
//         id: imageId,
//       },
//     });

//     if (!existingImage) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery image not found",
//       });
//     }

//     const updateData = {};

//     if (imageUrl !== undefined) {
//       updateData.imageUrl =
//         imageUrl.trim();
//     }

//     if (title !== undefined) {
//       updateData.title =
//         title?.trim() || null;
//     }

//     if (description !== undefined) {
//       updateData.description =
//         description?.trim() || null;
//     }

//     if (altText !== undefined) {
//       updateData.altText =
//         altText?.trim() || null;
//     }

//     const image = await prisma.galleryImage.update({
//       where: {
//         id: imageId,
//       },
//       data: updateData,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Gallery image updated successfully",
//       data: image,
//     });
//   } catch (error) {
//     console.error("Update gallery image error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update gallery image",
//     });
//   }
// };

// // ==========================================
// // DELETE IMAGE
// // DELETE /api/gallery/images/:id
// // ADMIN
// // ==========================================

// const deleteImage = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const imageId = Number(id);

//     if (!Number.isInteger(imageId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid image ID",
//       });
//     }

//     const existingImage = await prisma.galleryImage.findUnique({
//       where: {
//         id: imageId,
//       },
//     });

//     if (!existingImage) {
//       return res.status(404).json({
//         success: false,
//         message: "Gallery image not found",
//       });
//     }

//     await prisma.galleryImage.delete({
//       where: {
//         id: imageId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Gallery image deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete gallery image error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete gallery image",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   getAllAlbums,
//   getPublishedAlbums,
//   getAlbumBySlug,
//   createAlbum,
//   updateAlbum,
//   deleteAlbum,
//   addImage,
//   updateImage,
//   deleteImage,
// };


const prisma = require("../config/db");

// ==========================================
// GET ALL ALBUMS
// GET /api/gallery
// ADMIN
// ==========================================

const getAllAlbums = async (req, res) => {
  try {
    const albums =
      await prisma.galleryAlbum.findMany({
        orderBy: {
          createdAt: "desc",
        },

        include: {
          images: {
            orderBy: {
              sortOrder: "asc",
            },
          },

          createdBy: {
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
      count: albums.length,
      data: albums,
    });
  } catch (error) {
    console.error(
      "Get all gallery albums error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch gallery albums",
    });
  }
};

// ==========================================
// GET PUBLISHED ALBUMS
// GET /api/gallery/published
// PUBLIC
// ==========================================

const getPublishedAlbums = async (
  req,
  res
) => {
  try {
    const albums =
      await prisma.galleryAlbum.findMany({
        where: {
          isPublished: true,
        },

        orderBy: {
          createdAt: "desc",
        },

        include: {
          images: {
            orderBy: {
              sortOrder: "asc",
            },
          },
        },
      });

    return res.status(200).json({
      success: true,
      count: albums.length,
      data: albums,
    });
  } catch (error) {
    console.error(
      "Get published gallery albums error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch published gallery",
    });
  }
};

// ==========================================
// GET ALBUM BY SLUG
// GET /api/gallery/:slug
// PUBLIC
// ==========================================

const getAlbumBySlug = async (
  req,
  res
) => {
  try {
    const { slug } = req.params;

    const album =
      await prisma.galleryAlbum.findUnique({
        where: {
          slug,
        },

        include: {
          images: {
            orderBy: {
              sortOrder: "asc",
            },
          },
        },
      });

    if (!album) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery album not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: album,
    });
  } catch (error) {
    console.error(
      "Get gallery album error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch gallery album",
    });
  }
};

// ==========================================
// CREATE ALBUM
// POST /api/gallery/albums
// ADMIN
// ==========================================

const createAlbum = async (
  req,
  res
) => {
  try {
    const {
      name,
      title,
      slug,
      description,
      coverImage,
      category,
      isPublished,
    } = req.body;

    // ----------------------------------------
    // Accept title from existing frontend
    // OR name from corrected frontend
    // ----------------------------------------

    const albumName =
      name?.trim() ||
      title?.trim();

    // ----------------------------------------
    // Validation
    // ----------------------------------------

    if (!albumName) {
      return res.status(400).json({
        success: false,
        message:
          "Album name is required",
      });
    }

    if (!slug?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Album slug is required",
      });
    }

    // ----------------------------------------
    // Check duplicate slug
    // ----------------------------------------

    const existingAlbum =
      await prisma.galleryAlbum.findUnique({
        where: {
          slug: slug.trim(),
        },
      });

    if (existingAlbum) {
      return res.status(409).json({
        success: false,
        message:
          "An album with this slug already exists",
      });
    }

    // ----------------------------------------
    // CREATE
    // ----------------------------------------

    const album =
      await prisma.galleryAlbum.create({
        data: {
          name: albumName,

          slug: slug.trim(),

          description:
            description?.trim() ||
            null,

          coverImage:
            coverImage?.trim() ||
            null,

          category:
            category?.trim() ||
            null,

          isPublished:
            isPublished !== undefined
              ? Boolean(isPublished)
              : true,

          // IMPORTANT
          createdById:
            req.user.id,
        },

        include: {
          images: {
            orderBy: {
              sortOrder: "asc",
            },
          },

          createdBy: {
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
      message:
        "Gallery album created successfully",
      data: album,
    });
  } catch (error) {
    console.error(
      "Create gallery album error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to create gallery album",
    });
  }
};

// ==========================================
// UPDATE ALBUM
// PUT /api/gallery/albums/:id
// ADMIN
// ==========================================

const updateAlbum = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const albumId = Number(id);

    if (!Number.isInteger(albumId)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid album ID",
      });
    }

    const {
      name,
      title,
      slug,
      description,
      coverImage,
      category,
      isPublished,
    } = req.body;

    // ----------------------------------------
    // Find album
    // ----------------------------------------

    const existingAlbum =
      await prisma.galleryAlbum.findUnique({
        where: {
          id: albumId,
        },
      });

    if (!existingAlbum) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery album not found",
      });
    }

    // ----------------------------------------
    // Slug conflict
    // ----------------------------------------

    if (
      slug !== undefined &&
      slug.trim() !== existingAlbum.slug
    ) {
      const slugExists =
        await prisma.galleryAlbum.findUnique({
          where: {
            slug: slug.trim(),
          },
        });

      if (
        slugExists &&
        slugExists.id !== albumId
      ) {
        return res.status(409).json({
          success: false,
          message:
            "An album with this slug already exists",
        });
      }
    }

    // ----------------------------------------
    // Prepare update
    // ----------------------------------------

    const updateData = {};

    const albumName =
      name?.trim() ||
      title?.trim();

    if (albumName) {
      updateData.name =
        albumName;
    }

    if (slug !== undefined) {
      updateData.slug =
        slug.trim();
    }

    if (description !== undefined) {
      updateData.description =
        description?.trim() ||
        null;
    }

    if (coverImage !== undefined) {
      updateData.coverImage =
        coverImage?.trim() ||
        null;
    }

    if (category !== undefined) {
      updateData.category =
        category?.trim() ||
        null;
    }

    if (
      isPublished !== undefined
    ) {
      updateData.isPublished =
        Boolean(isPublished);
    }

    // ----------------------------------------
    // UPDATE
    // ----------------------------------------

    const album =
      await prisma.galleryAlbum.update({
        where: {
          id: albumId,
        },

        data: updateData,

        include: {
          images: {
            orderBy: {
              sortOrder: "asc",
            },
          },

          createdBy: {
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
      message:
        "Gallery album updated successfully",
      data: album,
    });
  } catch (error) {
    console.error(
      "Update gallery album error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update gallery album",
    });
  }
};

// ==========================================
// DELETE ALBUM
// DELETE /api/gallery/albums/:id
// ADMIN
// ==========================================

const deleteAlbum = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const albumId = Number(id);

    if (!Number.isInteger(albumId)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid album ID",
      });
    }

    const existingAlbum =
      await prisma.galleryAlbum.findUnique({
        where: {
          id: albumId,
        },
      });

    if (!existingAlbum) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery album not found",
      });
    }

    await prisma.galleryAlbum.delete({
      where: {
        id: albumId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Gallery album deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete gallery album error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete gallery album",
    });
  }
};

// ==========================================
// ADD IMAGE
// POST /api/gallery/albums/:albumId/images
// ADMIN
// ==========================================

const addImage = async (
  req,
  res
) => {
  try {
    const { albumId } =
      req.params;

    const parsedAlbumId =
      Number(albumId);

    if (
      !Number.isInteger(
        parsedAlbumId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid album ID",
      });
    }

    const {
      imageUrl,
      image,
      caption,
      sortOrder,
    } = req.body;

    // ----------------------------------------
    // Support existing frontend `image`
    // ----------------------------------------

    const finalImageUrl =
      imageUrl?.trim() ||
      image?.trim();

    if (!finalImageUrl) {
      return res.status(400).json({
        success: false,
        message:
          "Image URL is required",
      });
    }

    // ----------------------------------------
    // Check album
    // ----------------------------------------

    const album =
      await prisma.galleryAlbum.findUnique({
        where: {
          id: parsedAlbumId,
        },
      });

    if (!album) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery album not found",
      });
    }

    // ----------------------------------------
    // Determine sort order
    // ----------------------------------------

    let finalSortOrder =
      Number(sortOrder);

    if (
      !Number.isInteger(
        finalSortOrder
      )
    ) {
      const lastImage =
        await prisma.galleryImage.findFirst({
          where: {
            albumId:
              parsedAlbumId,
          },

          orderBy: {
            sortOrder: "desc",
          },
        });

      finalSortOrder =
        lastImage
          ? lastImage.sortOrder + 1
          : 0;
    }

    // ----------------------------------------
    // CREATE IMAGE
    // ----------------------------------------

    const galleryImage =
      await prisma.galleryImage.create({
        data: {
          imageUrl:
            finalImageUrl,

          caption:
            caption?.trim() ||
            null,

          sortOrder:
            finalSortOrder,

          albumId:
            parsedAlbumId,
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "Gallery image added successfully",
      data: galleryImage,
    });
  } catch (error) {
    console.error(
      "Add gallery image error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to add gallery image",
    });
  }
};

// ==========================================
// UPDATE IMAGE
// PUT /api/gallery/images/:id
// ADMIN
// ==========================================

const updateImage = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const imageId = Number(id);

    if (!Number.isInteger(imageId)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid image ID",
      });
    }

    const {
      imageUrl,
      image,
      caption,
      sortOrder,
    } = req.body;

    // ----------------------------------------
    // Find image
    // ----------------------------------------

    const existingImage =
      await prisma.galleryImage.findUnique({
        where: {
          id: imageId,
        },
      });

    if (!existingImage) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery image not found",
      });
    }

    // ----------------------------------------
    // Prepare update
    // ----------------------------------------

    const updateData = {};

    const finalImageUrl =
      imageUrl?.trim() ||
      image?.trim();

    if (finalImageUrl) {
      updateData.imageUrl =
        finalImageUrl;
    }

    if (caption !== undefined) {
      updateData.caption =
        caption?.trim() ||
        null;
    }

    if (sortOrder !== undefined) {
      const numericSortOrder =
        Number(sortOrder);

      if (
        Number.isInteger(
          numericSortOrder
        )
      ) {
        updateData.sortOrder =
          numericSortOrder;
      }
    }

    // ----------------------------------------
    // UPDATE
    // ----------------------------------------

    const galleryImage =
      await prisma.galleryImage.update({
        where: {
          id: imageId,
        },

        data: updateData,
      });

    return res.status(200).json({
      success: true,
      message:
        "Gallery image updated successfully",
      data: galleryImage,
    });
  } catch (error) {
    console.error(
      "Update gallery image error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update gallery image",
    });
  }
};

// ==========================================
// DELETE IMAGE
// DELETE /api/gallery/images/:id
// ADMIN
// ==========================================

const deleteImage = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const imageId = Number(id);

    if (!Number.isInteger(imageId)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid image ID",
      });
    }

    const existingImage =
      await prisma.galleryImage.findUnique({
        where: {
          id: imageId,
        },
      });

    if (!existingImage) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery image not found",
      });
    }

    await prisma.galleryImage.delete({
      where: {
        id: imageId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Gallery image deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete gallery image error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete gallery image",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllAlbums,
  getPublishedAlbums,
  getAlbumBySlug,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  addImage,
  updateImage,
  deleteImage,
};
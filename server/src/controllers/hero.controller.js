// const prisma = require("../config/db");

// // ==========================================
// // GET HERO
// // GET /api/hero
// // PUBLIC
// // ==========================================

// // const getHero = async (req, res) => {
// //   try {
// //     const hero = await prisma.hero.findFirst({
// //       where: {
// //         isActive: true,
// //       },
// //       orderBy: {
// //         id: "desc",
// //       },
// //     });

// //     if (!hero) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Hero content not found",
// //       });
// //     }

// //     return res.status(200).json({
// //       success: true,
// //       data: hero,
// //     });
// //   } catch (error) {
// //     console.error("Get hero error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch hero content",
// //     });
// //   }
// // };


// const getHero = async (req, res) => {
//   try {
//     const heroes = await prisma.hero.findMany({
//       where: {
//         isActive: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: heroes.length,
//       data: heroes,
//     });
//   } catch (error) {
//     console.error("Get hero error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch hero",
//     });
//   }
// };
// // ==========================================
// // GET HERO FOR ADMIN
// // GET /api/hero/admin
// // ADMIN
// // ==========================================

// const getAdminHero = async (req, res) => {
//   try {
//     const hero = await prisma.hero.findFirst({
//       orderBy: {
//         id: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       data: hero,
//     });
//   } catch (error) {
//     console.error("Get admin hero error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch hero content",
//     });
//   }
// };

// // ==========================================
// // CREATE HERO
// // POST /api/hero
// // ADMIN
// // ==========================================

// const createHero = async (req, res) => {
//   try {
//     const {
//       title,
//       subtitle,
//       description,
//       buttonText,
//       buttonLink,
//       image,
//       isActive,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!title || !title.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Hero title is required",
//       });
//     }

//     // ------------------------------------------
//     // Check existing hero
//     // ------------------------------------------

//     const existingHero = await prisma.hero.findFirst();

//     if (existingHero) {
//       return res.status(409).json({
//         success: false,
//         message:
//           "Hero content already exists. Please update the existing hero.",
//       });
//     }

//     // ------------------------------------------
//     // Create
//     // ------------------------------------------

//     const hero = await prisma.hero.create({
//       data: {
//         title: title.trim(),

//         subtitle:
//           subtitle?.trim() || null,

//         description:
//           description?.trim() || null,

//         buttonText:
//           buttonText?.trim() || null,

//         buttonLink:
//           buttonLink?.trim() || null,

//         image:
//           image?.trim() || null,

//         isActive:
//           isActive !== undefined
//             ? Boolean(isActive)
//             : true,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Hero content created successfully",
//       data: hero,
//     });
//   } catch (error) {
//     console.error("Create hero error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create hero content",
//     });
//   }
// };

// // ==========================================
// // UPDATE HERO
// // PUT /api/hero/:id
// // ADMIN
// // ==========================================

// const updateHero = async (req, res) => {
//   try {
//     const heroId = Number(req.params.id);

//     if (!Number.isInteger(heroId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid hero ID",
//       });
//     }

//     // ------------------------------------------
//     // Find hero
//     // ------------------------------------------

//     const existingHero = await prisma.hero.findUnique({
//       where: {
//         id: heroId,
//       },
//     });

//     if (!existingHero) {
//       return res.status(404).json({
//         success: false,
//         message: "Hero content not found",
//       });
//     }

//     const {
//       title,
//       subtitle,
//       description,
//       buttonText,
//       buttonLink,
//       image,
//       isActive,
//     } = req.body;

//     // ------------------------------------------
//     // Prepare update
//     // ------------------------------------------

//     const updateData = {};

//     if (title !== undefined) {
//       if (!title.trim()) {
//         return res.status(400).json({
//           success: false,
//           message: "Hero title cannot be empty",
//         });
//       }

//       updateData.title = title.trim();
//     }

//     if (subtitle !== undefined) {
//       updateData.subtitle =
//         subtitle?.trim() || null;
//     }

//     if (description !== undefined) {
//       updateData.description =
//         description?.trim() || null;
//     }

//     if (buttonText !== undefined) {
//       updateData.buttonText =
//         buttonText?.trim() || null;
//     }

//     if (buttonLink !== undefined) {
//       updateData.buttonLink =
//         buttonLink?.trim() || null;
//     }

//     if (image !== undefined) {
//       updateData.image =
//         image?.trim() || null;
//     }

//     if (isActive !== undefined) {
//       updateData.isActive = Boolean(isActive);
//     }

//     // ------------------------------------------
//     // Update
//     // ------------------------------------------

//     const hero = await prisma.hero.update({
//       where: {
//         id: heroId,
//       },
//       data: updateData,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Hero content updated successfully",
//       data: hero,
//     });
//   } catch (error) {
//     console.error("Update hero error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update hero content",
//     });
//   }
// };

// // ==========================================
// // DELETE HERO
// // DELETE /api/hero/:id
// // ADMIN
// // ==========================================

// const deleteHero = async (req, res) => {
//   try {
//     const heroId = Number(req.params.id);

//     if (!Number.isInteger(heroId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid hero ID",
//       });
//     }

//     const existingHero = await prisma.hero.findUnique({
//       where: {
//         id: heroId,
//       },
//     });

//     if (!existingHero) {
//       return res.status(404).json({
//         success: false,
//         message: "Hero content not found",
//       });
//     }

//     await prisma.hero.delete({
//       where: {
//         id: heroId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Hero content deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete hero error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete hero content",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   getHero,
//   getAdminHero,
//   createHero,
//   updateHero,
//   deleteHero,
// };

const prisma = require("../config/db");

// ==========================================
// GET HERO SLIDES
// GET /api/hero
// PUBLIC
// ==========================================

const getHero = async (req, res) => {
  try {
    const heroes = await prisma.hero.findMany({
      where: {
        isActive: true,
      },

      orderBy: [
        {
          sortOrder: "asc",
        },
        {
          createdAt: "asc",
        },
      ],
    });

    return res.status(200).json({
      success: true,
      count: heroes.length,
      data: heroes,
    });
  } catch (error) {
    console.error("Get hero error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch hero slides",
    });
  }
};


// ==========================================
// GET ALL HERO SLIDES
// GET /api/hero/admin
// ADMIN
// ==========================================

const getAdminHero = async (req, res) => {
  try {
    const heroes = await prisma.hero.findMany({
      orderBy: [
        {
          sortOrder: "asc",
        },
        {
          createdAt: "asc",
        },
      ],
    });

    return res.status(200).json({
      success: true,
      count: heroes.length,
      data: heroes,
    });
  } catch (error) {
    console.error("Get admin hero error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch hero slides",
    });
  }
};


// ==========================================
// CREATE HERO SLIDE
// POST /api/hero
// ADMIN
// ==========================================

const createHero = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      description,
      buttonText,
      buttonLink,
      image,
      isActive,
      sortOrder,
    } = req.body;


    // ------------------------------------------
    // Validation
    // ------------------------------------------

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Hero title is required",
      });
    }


    // ------------------------------------------
    // Get next sort order automatically
    // ------------------------------------------

    let order = Number(sortOrder);

    if (!Number.isInteger(order) || order < 0) {
      const lastHero = await prisma.hero.findFirst({
        orderBy: {
          sortOrder: "desc",
        },
      });

      order = lastHero
        ? lastHero.sortOrder + 1
        : 0;
    }


    // ------------------------------------------
    // Create hero slide
    // ------------------------------------------

    const hero = await prisma.hero.create({
      data: {
        title: title.trim(),

        subtitle:
          subtitle?.trim() || null,

        description:
          description?.trim() || null,

        buttonText:
          buttonText?.trim() || null,

        buttonLink:
          buttonLink?.trim() || null,

        image:
          image?.trim() || null,

        isActive:
          isActive !== undefined
            ? Boolean(isActive)
            : true,

        sortOrder: order,
      },
    });


    return res.status(201).json({
      success: true,
      message: "Hero slide created successfully",
      data: hero,
    });

  } catch (error) {
    console.error("Create hero error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create hero slide",
    });
  }
};


// ==========================================
// UPDATE HERO SLIDE
// PUT /api/hero/:id
// ADMIN
// ==========================================

const updateHero = async (req, res) => {
  try {
    const heroId = Number(req.params.id);

    if (!Number.isInteger(heroId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hero ID",
      });
    }


    // ------------------------------------------
    // Find hero
    // ------------------------------------------

    const existingHero = await prisma.hero.findUnique({
      where: {
        id: heroId,
      },
    });

    if (!existingHero) {
      return res.status(404).json({
        success: false,
        message: "Hero slide not found",
      });
    }


    // ------------------------------------------
    // Request data
    // ------------------------------------------

    const {
      title,
      subtitle,
      description,
      buttonText,
      buttonLink,
      image,
      isActive,
      sortOrder,
    } = req.body;


    // ------------------------------------------
    // Prepare update
    // ------------------------------------------

    const updateData = {};


    if (title !== undefined) {
      if (!title || !title.trim()) {
        return res.status(400).json({
          success: false,
          message: "Hero title cannot be empty",
        });
      }

      updateData.title = title.trim();
    }


    if (subtitle !== undefined) {
      updateData.subtitle =
        subtitle?.trim() || null;
    }


    if (description !== undefined) {
      updateData.description =
        description?.trim() || null;
    }


    if (buttonText !== undefined) {
      updateData.buttonText =
        buttonText?.trim() || null;
    }


    if (buttonLink !== undefined) {
      updateData.buttonLink =
        buttonLink?.trim() || null;
    }


    if (image !== undefined) {
      updateData.image =
        image?.trim() || null;
    }


    if (isActive !== undefined) {
      updateData.isActive =
        Boolean(isActive);
    }


    if (sortOrder !== undefined) {
      const order = Number(sortOrder);

      if (!Number.isInteger(order) || order < 0) {
        return res.status(400).json({
          success: false,
          message: "Sort order must be a positive number",
        });
      }

      updateData.sortOrder = order;
    }


    // ------------------------------------------
    // Update
    // ------------------------------------------

    const hero = await prisma.hero.update({
      where: {
        id: heroId,
      },

      data: updateData,
    });


    return res.status(200).json({
      success: true,
      message: "Hero slide updated successfully",
      data: hero,
    });

  } catch (error) {
    console.error("Update hero error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update hero slide",
    });
  }
};


// ==========================================
// DELETE HERO SLIDE
// DELETE /api/hero/:id
// ADMIN
// ==========================================

const deleteHero = async (req, res) => {
  try {
    const heroId = Number(req.params.id);

    if (!Number.isInteger(heroId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hero ID",
      });
    }


    // ------------------------------------------
    // Find hero
    // ------------------------------------------

    const existingHero = await prisma.hero.findUnique({
      where: {
        id: heroId,
      },
    });

    if (!existingHero) {
      return res.status(404).json({
        success: false,
        message: "Hero slide not found",
      });
    }


    // ------------------------------------------
    // Delete
    // ------------------------------------------

    await prisma.hero.delete({
      where: {
        id: heroId,
      },
    });


    return res.status(200).json({
      success: true,
      message: "Hero slide deleted successfully",
    });

  } catch (error) {
    console.error("Delete hero error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete hero slide",
    });
  }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getHero,
  getAdminHero,
  createHero,
  updateHero,
  deleteHero,
};
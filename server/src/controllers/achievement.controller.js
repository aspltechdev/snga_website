// const prisma = require("../config/db");

// // ==========================================
// // GET ALL ACHIEVEMENTS
// // GET /api/achievements
// // ADMIN
// // ==========================================

// const getAllAchievements = async (req, res) => {
//   try {
//     const achievements = await prisma.achievement.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: achievements.length,
//       data: achievements,
//     });
//   } catch (error) {
//     console.error("Get all achievements error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch achievements",
//     });
//   }
// };

// // ==========================================
// // GET PUBLISHED ACHIEVEMENTS
// // GET /api/achievements/published
// // PUBLIC
// // ==========================================

// const getPublishedAchievements = async (req, res) => {
//   try {
//     const achievements = await prisma.achievement.findMany({
//       where: {
//         isPublished: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: achievements.length,
//       data: achievements,
//     });
//   } catch (error) {
//     console.error("Get published achievements error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch achievements",
//     });
//   }
// };

// // ==========================================
// // GET ACHIEVEMENT BY ID
// // GET /api/achievements/:id
// // PUBLIC
// // ==========================================

// const getAchievementById = async (req, res) => {
//   try {
//     const achievementId = Number(req.params.id);

//     if (!Number.isInteger(achievementId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid achievement ID",
//       });
//     }

//     const achievement = await prisma.achievement.findUnique({
//       where: {
//         id: achievementId,
//       },
//     });

//     if (!achievement) {
//       return res.status(404).json({
//         success: false,
//         message: "Achievement not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: achievement,
//     });
//   } catch (error) {
//     console.error("Get achievement error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch achievement",
//     });
//   }
// };

// // ==========================================
// // CREATE ACHIEVEMENT
// // POST /api/achievements
// // ADMIN
// // ==========================================

// const createAchievement = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       image,
//       category,
//       year,
//       isPublished,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!title) {
//       return res.status(400).json({
//         success: false,
//         message: "Title is required",
//       });
//     }

//     // ------------------------------------------
//     // Create
//     // ------------------------------------------

//     const achievement = await prisma.achievement.create({
//       data: {
//         title: title.trim(),
//         description: description?.trim() || null,
//         image: image?.trim() || null,
//         category: category?.trim() || null,
//         year: year ? Number(year) : null,
//         isPublished: isPublished === true,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Achievement created successfully",
//       data: achievement,
//     });
//   } catch (error) {
//     console.error("Create achievement error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create achievement",
//     });
//   }
// };

// // ==========================================
// // UPDATE ACHIEVEMENT
// // PUT /api/achievements/:id
// // ADMIN
// // ==========================================

// const updateAchievement = async (req, res) => {
//   try {
//     const achievementId = Number(req.params.id);

//     if (!Number.isInteger(achievementId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid achievement ID",
//       });
//     }

//     const existingAchievement =
//       await prisma.achievement.findUnique({
//         where: {
//           id: achievementId,
//         },
//       });

//     if (!existingAchievement) {
//       return res.status(404).json({
//         success: false,
//         message: "Achievement not found",
//       });
//     }

//     const {
//       title,
//       description,
//       image,
//       category,
//       year,
//       isPublished,
//     } = req.body;

//     const updateData = {};

//     if (title !== undefined) {
//       updateData.title = title.trim();
//     }

//     if (description !== undefined) {
//       updateData.description =
//         description?.trim() || null;
//     }

//     if (image !== undefined) {
//       updateData.image =
//         image?.trim() || null;
//     }

//     if (category !== undefined) {
//       updateData.category =
//         category?.trim() || null;
//     }

//     if (year !== undefined) {
//       updateData.year = year
//         ? Number(year)
//         : null;
//     }

//     if (isPublished !== undefined) {
//       updateData.isPublished = isPublished === true;
//     }

//     const achievement =
//       await prisma.achievement.update({
//         where: {
//           id: achievementId,
//         },
//         data: updateData,
//       });

//     return res.status(200).json({
//       success: true,
//       message: "Achievement updated successfully",
//       data: achievement,
//     });
//   } catch (error) {
//     console.error("Update achievement error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update achievement",
//     });
//   }
// };

// // ==========================================
// // DELETE ACHIEVEMENT
// // DELETE /api/achievements/:id
// // ADMIN
// // ==========================================

// const deleteAchievement = async (req, res) => {
//   try {
//     const achievementId = Number(req.params.id);

//     if (!Number.isInteger(achievementId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid achievement ID",
//       });
//     }

//     const existingAchievement =
//       await prisma.achievement.findUnique({
//         where: {
//           id: achievementId,
//         },
//       });

//     if (!existingAchievement) {
//       return res.status(404).json({
//         success: false,
//         message: "Achievement not found",
//       });
//     }

//     await prisma.achievement.delete({
//       where: {
//         id: achievementId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Achievement deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete achievement error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete achievement",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   getAllAchievements,
//   getPublishedAchievements,
//   getAchievementById,
//   createAchievement,
//   updateAchievement,
//   deleteAchievement,
// };



const prisma = require("../config/db");

// ==========================================
// GET ALL ACHIEVEMENTS
// GET /api/achievements
// ADMIN
// ==========================================

const getAllAchievements = async (req, res) => {
  try {
    const achievements =
      await prisma.achievement.findMany({
        orderBy: [
          {
            achievementDate: "desc",
          },
          {
            createdAt: "desc",
          },
        ],

        include: {
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
      count: achievements.length,
      data: achievements,
    });
  } catch (error) {
    console.error(
      "Get all achievements error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch achievements",
    });
  }
};

// ==========================================
// GET PUBLISHED ACHIEVEMENTS
// GET /api/achievements/published
// PUBLIC
// ==========================================

const getPublishedAchievements = async (
  req,
  res
) => {
  try {
    const achievements =
      await prisma.achievement.findMany({
        where: {
          isPublished: true,
        },

        orderBy: [
          {
            achievementDate: "desc",
          },
          {
            createdAt: "desc",
          },
        ],
      });

    return res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements,
    });
  } catch (error) {
    console.error(
      "Get published achievements error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch achievements",
    });
  }
};

// ==========================================
// GET ACHIEVEMENT BY ID
// GET /api/achievements/:id
// ADMIN
// ==========================================

const getAchievementById = async (
  req,
  res
) => {
  try {
    const achievementId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        achievementId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid achievement ID",
      });
    }

    const achievement =
      await prisma.achievement.findUnique({
        where: {
          id: achievementId,
        },

        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

    if (!achievement) {
      return res.status(404).json({
        success: false,
        message:
          "Achievement not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: achievement,
    });
  } catch (error) {
    console.error(
      "Get achievement error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch achievement",
    });
  }
};

// ==========================================
// CREATE ACHIEVEMENT
// POST /api/achievements
// ADMIN
// ==========================================

const createAchievement = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      studentName,
      category,
      image,
      achievementDate,
      isPublished,
    } = req.body;

    // ======================================
    // VALIDATION
    // ======================================

    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Title is required",
      });
    }

    // ======================================
    // DATE
    // ======================================

    let parsedDate = null;

    if (
      achievementDate
    ) {
      parsedDate =
        new Date(
          achievementDate
        );

      if (
        Number.isNaN(
          parsedDate.getTime()
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid achievement date",
        });
      }
    }

    // ======================================
    // CREATE
    // ======================================

    const achievement =
      await prisma.achievement.create({
        data: {
          title:
            title.trim(),

          description:
            description?.trim() ||
            null,

          studentName:
            studentName?.trim() ||
            null,

          category:
            category?.trim() ||
            null,

          image:
            image?.trim() ||
            null,

          achievementDate:
            parsedDate,

          isPublished:
            isPublished !== undefined
              ? Boolean(isPublished)
              : true,

          // IMPORTANT
          // Comes from logged-in admin
          createdById:
            req.user.id,
        },

        include: {
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
        "Achievement created successfully",
      data: achievement,
    });
  } catch (error) {
    console.error(
      "Create achievement error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to create achievement",
    });
  }
};

// ==========================================
// UPDATE ACHIEVEMENT
// PUT /api/achievements/:id
// ADMIN
// ==========================================

const updateAchievement = async (
  req,
  res
) => {
  try {
    const achievementId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        achievementId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid achievement ID",
      });
    }

    // ======================================
    // FIND
    // ======================================

    const existingAchievement =
      await prisma.achievement.findUnique({
        where: {
          id: achievementId,
        },
      });

    if (!existingAchievement) {
      return res.status(404).json({
        success: false,
        message:
          "Achievement not found",
      });
    }

    const {
      title,
      description,
      studentName,
      category,
      image,
      achievementDate,
      isPublished,
    } = req.body;

    const updateData = {};

    // ======================================
    // TITLE
    // ======================================

    if (
      title !== undefined
    ) {
      if (!title.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Title is required",
        });
      }

      updateData.title =
        title.trim();
    }

    // ======================================
    // DESCRIPTION
    // ======================================

    if (
      description !== undefined
    ) {
      updateData.description =
        description?.trim() ||
        null;
    }

    // ======================================
    // STUDENT NAME
    // ======================================

    if (
      studentName !== undefined
    ) {
      updateData.studentName =
        studentName?.trim() ||
        null;
    }

    // ======================================
    // CATEGORY
    // ======================================

    if (
      category !== undefined
    ) {
      updateData.category =
        category?.trim() ||
        null;
    }

    // ======================================
    // IMAGE
    // ======================================

    if (
      image !== undefined
    ) {
      updateData.image =
        image?.trim() ||
        null;
    }

    // ======================================
    // ACHIEVEMENT DATE
    // ======================================

    if (
      achievementDate !== undefined
    ) {
      if (
        achievementDate ===
          null ||
        achievementDate === ""
      ) {
        updateData.achievementDate =
          null;
      } else {
        const parsedDate =
          new Date(
            achievementDate
          );

        if (
          Number.isNaN(
            parsedDate.getTime()
          )
        ) {
          return res.status(400).json({
            success: false,
            message:
              "Invalid achievement date",
          });
        }

        updateData.achievementDate =
          parsedDate;
      }
    }

    // ======================================
    // PUBLISHED
    // ======================================

    if (
      isPublished !== undefined
    ) {
      updateData.isPublished =
        Boolean(isPublished);
    }

    // ======================================
    // UPDATE
    // ======================================

    const achievement =
      await prisma.achievement.update({
        where: {
          id: achievementId,
        },

        data: updateData,

        include: {
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
        "Achievement updated successfully",
      data: achievement,
    });
  } catch (error) {
    console.error(
      "Update achievement error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update achievement",
    });
  }
};

// ==========================================
// DELETE ACHIEVEMENT
// DELETE /api/achievements/:id
// ADMIN
// ==========================================

const deleteAchievement = async (
  req,
  res
) => {
  try {
    const achievementId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        achievementId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid achievement ID",
      });
    }

    // ======================================
    // FIND
    // ======================================

    const existingAchievement =
      await prisma.achievement.findUnique({
        where: {
          id: achievementId,
        },
      });

    if (!existingAchievement) {
      return res.status(404).json({
        success: false,
        message:
          "Achievement not found",
      });
    }

    // ======================================
    // DELETE
    // ======================================

    await prisma.achievement.delete({
      where: {
        id: achievementId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Achievement deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete achievement error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete achievement",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllAchievements,
  getPublishedAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
};
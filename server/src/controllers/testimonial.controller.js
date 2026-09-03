// const prisma = require("../config/db");

// // ==========================================
// // GET ALL TESTIMONIALS
// // GET /api/testimonials
// // ADMIN
// // ==========================================

// const getAllTestimonials = async (req, res) => {
//   try {
//     const testimonials = await prisma.testimonial.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: testimonials.length,
//       data: testimonials,
//     });
//   } catch (error) {
//     console.error("Get all testimonials error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonials",
//     });
//   }
// };

// // ==========================================
// // GET PUBLISHED TESTIMONIALS
// // GET /api/testimonials/published
// // PUBLIC
// // ==========================================

// const getPublishedTestimonials = async (req, res) => {
//   try {
//     const testimonials = await prisma.testimonial.findMany({
//       where: {
//         isPublished: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: testimonials.length,
//       data: testimonials,
//     });
//   } catch (error) {
//     console.error(
//       "Get published testimonials error:",
//       error
//     );

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonials",
//     });
//   }
// };

// // ==========================================
// // GET TESTIMONIAL BY ID
// // GET /api/testimonials/:id
// // PUBLIC
// // ==========================================

// const getTestimonialById = async (req, res) => {
//   try {
//     const testimonialId = Number(req.params.id);

//     if (!Number.isInteger(testimonialId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid testimonial ID",
//       });
//     }

//     const testimonial =
//       await prisma.testimonial.findUnique({
//         where: {
//           id: testimonialId,
//         },
//       });

//     if (!testimonial) {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Get testimonial error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch testimonial",
//     });
//   }
// };

// // ==========================================
// // CREATE TESTIMONIAL
// // POST /api/testimonials
// // ADMIN
// // ==========================================

// const createTestimonial = async (req, res) => {
//   try {
//     const {
//       name,
//       role,
//       content,
//       image,
//       rating,
//       isPublished,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!name || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "Name and content are required",
//       });
//     }

//     // ------------------------------------------
//     // Validate rating
//     // ------------------------------------------

//     let finalRating = null;

//     if (rating !== undefined && rating !== null) {
//       finalRating = Number(rating);

//       if (
//         !Number.isInteger(finalRating) ||
//         finalRating < 1 ||
//         finalRating > 5
//       ) {
//         return res.status(400).json({
//           success: false,
//           message: "Rating must be an integer between 1 and 5",
//         });
//       }
//     }

//     // ------------------------------------------
//     // Create testimonial
//     // ------------------------------------------

//     const testimonial =
//       await prisma.testimonial.create({
//         data: {
//           name: name.trim(),
//           role: role?.trim() || null,
//           content: content.trim(),
//           image: image?.trim() || null,
//           rating: finalRating,
//           isPublished: isPublished === true,
//         },
//       });

//     return res.status(201).json({
//       success: true,
//       message: "Testimonial created successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Create testimonial error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create testimonial",
//     });
//   }
// };

// // ==========================================
// // UPDATE TESTIMONIAL
// // PUT /api/testimonials/:id
// // ADMIN
// // ==========================================

// const updateTestimonial = async (req, res) => {
//   try {
//     const testimonialId = Number(req.params.id);

//     if (!Number.isInteger(testimonialId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid testimonial ID",
//       });
//     }

//     const existingTestimonial =
//       await prisma.testimonial.findUnique({
//         where: {
//           id: testimonialId,
//         },
//       });

//     if (!existingTestimonial) {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     const {
//       name,
//       role,
//       content,
//       image,
//       rating,
//       isPublished,
//     } = req.body;

//     const updateData = {};

//     if (name !== undefined) {
//       updateData.name = name.trim();
//     }

//     if (role !== undefined) {
//       updateData.role = role?.trim() || null;
//     }

//     if (content !== undefined) {
//       updateData.content = content.trim();
//     }

//     if (image !== undefined) {
//       updateData.image = image?.trim() || null;
//     }

//     if (rating !== undefined) {
//       if (rating === null || rating === "") {
//         updateData.rating = null;
//       } else {
//         const finalRating = Number(rating);

//         if (
//           !Number.isInteger(finalRating) ||
//           finalRating < 1 ||
//           finalRating > 5
//         ) {
//           return res.status(400).json({
//             success: false,
//             message:
//               "Rating must be an integer between 1 and 5",
//           });
//         }

//         updateData.rating = finalRating;
//       }
//     }

//     if (isPublished !== undefined) {
//       updateData.isPublished = isPublished === true;
//     }

//     const testimonial =
//       await prisma.testimonial.update({
//         where: {
//           id: testimonialId,
//         },
//         data: updateData,
//       });

//     return res.status(200).json({
//       success: true,
//       message: "Testimonial updated successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("Update testimonial error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update testimonial",
//     });
//   }
// };

// // ==========================================
// // DELETE TESTIMONIAL
// // DELETE /api/testimonials/:id
// // ADMIN
// // ==========================================

// const deleteTestimonial = async (req, res) => {
//   try {
//     const testimonialId = Number(req.params.id);

//     if (!Number.isInteger(testimonialId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid testimonial ID",
//       });
//     }

//     const existingTestimonial =
//       await prisma.testimonial.findUnique({
//         where: {
//           id: testimonialId,
//         },
//       });

//     if (!existingTestimonial) {
//       return res.status(404).json({
//         success: false,
//         message: "Testimonial not found",
//       });
//     }

//     await prisma.testimonial.delete({
//       where: {
//         id: testimonialId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Testimonial deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete testimonial error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete testimonial",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   getAllTestimonials,
//   getPublishedTestimonials,
//   getTestimonialById,
//   createTestimonial,
//   updateTestimonial,
//   deleteTestimonial,
// };


const prisma = require("../config/db");

// ==========================================
// GET ALL TESTIMONIALS
// GET /api/testimonials
// ADMIN
// ==========================================

const getAllTestimonials = async (req, res) => {
  try {
    const testimonials =
      await prisma.testimonial.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error(
      "Get all testimonials error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
    });
  }
};

// ==========================================
// GET PUBLISHED TESTIMONIALS
// GET /api/testimonials/published
// PUBLIC
// ==========================================

const getPublishedTestimonials = async (
  req,
  res
) => {
  try {
    const testimonials =
      await prisma.testimonial.findMany({
        where: {
          isPublished: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error(
      "Get published testimonials error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
    });
  }
};

// ==========================================
// GET TESTIMONIAL BY ID
// GET /api/testimonials/:id
// ADMIN
// ==========================================

const getTestimonialById = async (
  req,
  res
) => {
  try {
    const testimonialId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        testimonialId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid testimonial ID",
      });
    }

    const testimonial =
      await prisma.testimonial.findUnique({
        where: {
          id: testimonialId,
        },
      });

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Get testimonial error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch testimonial",
    });
  }
};

// ==========================================
// CREATE TESTIMONIAL
// POST /api/testimonials
// ADMIN
// ==========================================

const createTestimonial = async (
  req,
  res
) => {
  try {
    const {
      name,
      role,
      message,
      image,
      rating,
      isPublished,
    } = req.body;

    // ========================================
    // VALIDATION
    // ========================================

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Message is required",
      });
    }

    // ========================================
    // RATING
    // ========================================

    let finalRating = null;

    if (
      rating !== undefined &&
      rating !== null &&
      rating !== ""
    ) {
      finalRating = Number(rating);

      if (
        !Number.isInteger(
          finalRating
        ) ||
        finalRating < 1 ||
        finalRating > 5
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Rating must be an integer between 1 and 5",
        });
      }
    }

    // ========================================
    // CREATE
    // ========================================

    const testimonial =
      await prisma.testimonial.create({
        data: {
          name: name.trim(),

          role:
            role?.trim() || null,

          message:
            message.trim(),

          image:
            image?.trim() || null,

          rating:
            finalRating,

          isPublished:
            isPublished !== undefined
              ? isPublished === true
              : true,
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Create testimonial error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to create testimonial",
    });
  }
};

// ==========================================
// UPDATE TESTIMONIAL
// PUT /api/testimonials/:id
// ADMIN
// ==========================================

const updateTestimonial = async (
  req,
  res
) => {
  try {
    const testimonialId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        testimonialId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid testimonial ID",
      });
    }

    // ========================================
    // FIND EXISTING
    // ========================================

    const existingTestimonial =
      await prisma.testimonial.findUnique({
        where: {
          id: testimonialId,
        },
      });

    if (!existingTestimonial) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    const {
      name,
      role,
      message,
      image,
      rating,
      isPublished,
    } = req.body;

    const updateData = {};

    // ========================================
    // NAME
    // ========================================

    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Name is required",
        });
      }

      updateData.name =
        name.trim();
    }

    // ========================================
    // ROLE
    // ========================================

    if (role !== undefined) {
      updateData.role =
        role?.trim() || null;
    }

    // ========================================
    // MESSAGE
    // ========================================

    if (message !== undefined) {
      if (!message.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Message is required",
        });
      }

      updateData.message =
        message.trim();
    }

    // ========================================
    // IMAGE
    // ========================================

    if (image !== undefined) {
      updateData.image =
        image?.trim() || null;
    }

    // ========================================
    // RATING
    // ========================================

    if (rating !== undefined) {
      if (
        rating === null ||
        rating === ""
      ) {
        updateData.rating = null;
      } else {
        const finalRating =
          Number(rating);

        if (
          !Number.isInteger(
            finalRating
          ) ||
          finalRating < 1 ||
          finalRating > 5
        ) {
          return res.status(400).json({
            success: false,
            message:
              "Rating must be an integer between 1 and 5",
          });
        }

        updateData.rating =
          finalRating;
      }
    }

    // ========================================
    // PUBLISHED
    // ========================================

    if (
      isPublished !== undefined
    ) {
      updateData.isPublished =
        isPublished === true;
    }

    // ========================================
    // UPDATE
    // ========================================

    const testimonial =
      await prisma.testimonial.update({
        where: {
          id: testimonialId,
        },

        data: updateData,
      });

    return res.status(200).json({
      success: true,
      message:
        "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error(
      "Update testimonial error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update testimonial",
    });
  }
};

// ==========================================
// DELETE TESTIMONIAL
// DELETE /api/testimonials/:id
// ADMIN
// ==========================================

const deleteTestimonial = async (
  req,
  res
) => {
  try {
    const testimonialId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        testimonialId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid testimonial ID",
      });
    }

    // ========================================
    // FIND EXISTING
    // ========================================

    const existingTestimonial =
      await prisma.testimonial.findUnique({
        where: {
          id: testimonialId,
        },
      });

    if (!existingTestimonial) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    // ========================================
    // DELETE
    // ========================================

    await prisma.testimonial.delete({
      where: {
        id: testimonialId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete testimonial error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete testimonial",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getAllTestimonials,
  getPublishedTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
}; 
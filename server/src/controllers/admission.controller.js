// const prisma = require("../config/db");

// // ==========================================
// // CREATE ADMISSION ENQUIRY
// // POST /api/admissions
// // PUBLIC
// // ==========================================

// const createAdmission = async (req, res) => {
//   try {
//     const {
//       studentName,
//       parentName,
//       email,
//       phone,
//       classApplying,
//       academicYear,
//       message,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!studentName || !parentName || !phone) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Student name, parent name and phone are required",
//       });
//     }

//     // ------------------------------------------
//     // Create enquiry
//     // ------------------------------------------

//     const enquiry = await prisma.admissionEnquiry.create({
//       data: {
//         studentName: studentName.trim(),
//         parentName: parentName.trim(),
//         email: email?.trim().toLowerCase() || null,
//         phone: phone.trim(),
//         classApplying: classApplying?.trim() || null,
//         academicYear: academicYear?.trim() || null,
//         message: message?.trim() || null,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message:
//         "Admission enquiry submitted successfully",
//       data: {
//         id: enquiry.id,
//       },
//     });
//   } catch (error) {
//     console.error("Create admission enquiry error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to submit admission enquiry",
//     });
//   }
// };

// // ==========================================
// // GET ALL ADMISSION ENQUIRIES
// // GET /api/admissions
// // ADMIN
// // ==========================================

// const getAllAdmissions = async (req, res) => {
//   try {
//     const enquiries =
//       await prisma.admissionEnquiry.findMany({
//         orderBy: {
//           createdAt: "desc",
//         },
//       });

//     return res.status(200).json({
//       success: true,
//       count: enquiries.length,
//       data: enquiries,
//     });
//   } catch (error) {
//     console.error("Get admissions error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch admission enquiries",
//     });
//   }
// };

// // ==========================================
// // GET ADMISSION BY ID
// // GET /api/admissions/:id
// // ADMIN
// // ==========================================

// const getAdmissionById = async (req, res) => {
//   try {
//     const admissionId = Number(req.params.id);

//     if (!Number.isInteger(admissionId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid admission enquiry ID",
//       });
//     }

//     const enquiry =
//       await prisma.admissionEnquiry.findUnique({
//         where: {
//           id: admissionId,
//         },
//       });

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Admission enquiry not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error("Get admission error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch admission enquiry",
//     });
//   }
// };

// // ==========================================
// // UPDATE ADMISSION STATUS
// // PUT /api/admissions/:id
// // ADMIN
// // ==========================================

// const updateAdmission = async (req, res) => {
//   try {
//     const admissionId = Number(req.params.id);

//     if (!Number.isInteger(admissionId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid admission enquiry ID",
//       });
//     }

//     const existingEnquiry =
//       await prisma.admissionEnquiry.findUnique({
//         where: {
//           id: admissionId,
//         },
//       });

//     if (!existingEnquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Admission enquiry not found",
//       });
//     }

//     const {
//       studentName,
//       parentName,
//       email,
//       phone,
//       classApplying,
//       academicYear,
//       message,
//       status,
//     } = req.body;

//     const updateData = {};

//     if (studentName !== undefined) {
//       updateData.studentName = studentName.trim();
//     }

//     if (parentName !== undefined) {
//       updateData.parentName = parentName.trim();
//     }

//     if (email !== undefined) {
//       updateData.email =
//         email?.trim().toLowerCase() || null;
//     }

//     if (phone !== undefined) {
//       updateData.phone = phone.trim();
//     }

//     if (classApplying !== undefined) {
//       updateData.classApplying =
//         classApplying?.trim() || null;
//     }

//     if (academicYear !== undefined) {
//       updateData.academicYear =
//         academicYear?.trim() || null;
//     }

//     if (message !== undefined) {
//       updateData.message =
//         message?.trim() || null;
//     }

//     // ------------------------------------------
//     // Validate status
//     // ------------------------------------------

//     if (status !== undefined) {
//       const allowedStatuses = [
//         "NEW",
//         "CONTACTED",
//         "FOLLOW_UP",
//         "CONVERTED",
//         "CLOSED",
//       ];

//       if (!allowedStatuses.includes(status)) {
//         return res.status(400).json({
//           success: false,
//           message:
//             "Invalid status. Allowed values: NEW, CONTACTED, FOLLOW_UP, CONVERTED, CLOSED",
//         });
//       }

//       updateData.status = status;
//     }

//     const enquiry =
//       await prisma.admissionEnquiry.update({
//         where: {
//           id: admissionId,
//         },
//         data: updateData,
//       });

//     return res.status(200).json({
//       success: true,
//       message:
//         "Admission enquiry updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error("Update admission error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update admission enquiry",
//     });
//   }
// };

// // ==========================================
// // DELETE ADMISSION
// // DELETE /api/admissions/:id
// // ADMIN
// // ==========================================

// const deleteAdmission = async (req, res) => {
//   try {
//     const admissionId = Number(req.params.id);

//     if (!Number.isInteger(admissionId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid admission enquiry ID",
//       });
//     }

//     const existingEnquiry =
//       await prisma.admissionEnquiry.findUnique({
//         where: {
//           id: admissionId,
//         },
//       });

//     if (!existingEnquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Admission enquiry not found",
//       });
//     }

//     await prisma.admissionEnquiry.delete({
//       where: {
//         id: admissionId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message:
//         "Admission enquiry deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete admission error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete admission enquiry",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   createAdmission,
//   getAllAdmissions,
//   getAdmissionById,
//   updateAdmission,
//   deleteAdmission,
// };


const prisma = require("../config/db");

// ==========================================
// CREATE ADMISSION ENQUIRY
// POST /api/admissions
// PUBLIC
// ==========================================

const createAdmission = async (req, res) => {
  try {
    const {
      parentName,
      studentName,
      className,
      mobile,
      email,
      location,
      message,
    } = req.body;

    // ========================================
    // VALIDATION
    // ========================================

    if (!parentName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Parent name is required",
      });
    }

    if (!studentName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Student name is required",
      });
    }

    if (!className?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Class is required",
      });
    }

    if (!mobile?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required",
      });
    }

    // ========================================
    // CREATE
    // ========================================

    const enquiry =
      await prisma.admissionEnquiry.create({
        data: {
          parentName:
            parentName.trim(),

          studentName:
            studentName.trim(),

          className:
            className.trim(),

          mobile:
            mobile.trim(),

          email:
            email?.trim().toLowerCase() ||
            null,

          location:
            location?.trim() ||
            null,

          message:
            message?.trim() ||
            null,

          // Prisma default is NEW
          // No need to send it manually
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "Admission enquiry submitted successfully",

      data: {
        id: enquiry.id,
      },
    });
  } catch (error) {
    console.error(
      "Create admission enquiry error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to submit admission enquiry",
    });
  }
};

// ==========================================
// GET ALL ADMISSION ENQUIRIES
// GET /api/admissions
// ADMIN
// ==========================================

const getAllAdmissions = async (
  req,
  res
) => {
  try {
    const {
      status,
    } = req.query;

    const where = {};

    // ----------------------------------------
    // Optional status filter
    // ----------------------------------------

    if (status) {
      where.status = status;
    }

    const enquiries =
      await prisma.admissionEnquiry.findMany({
        where,

        orderBy: {
          createdAt: "desc",
        },
      });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error(
      "Get admissions error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch admission enquiries",
    });
  }
};

// ==========================================
// GET ADMISSION BY ID
// GET /api/admissions/:id
// ADMIN
// ==========================================

const getAdmissionById = async (
  req,
  res
) => {
  try {
    const admissionId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        admissionId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid admission enquiry ID",
      });
    }

    const enquiry =
      await prisma.admissionEnquiry.findUnique({
        where: {
          id: admissionId,
        },
      });

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message:
          "Admission enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Get admission error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch admission enquiry",
    });
  }
};

// ==========================================
// UPDATE ADMISSION
// PUT /api/admissions/:id
// ADMIN
// ==========================================

const updateAdmission = async (
  req,
  res
) => {
  try {
    const admissionId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        admissionId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid admission enquiry ID",
      });
    }

    // ========================================
    // FIND EXISTING
    // ========================================

    const existingEnquiry =
      await prisma.admissionEnquiry.findUnique({
        where: {
          id: admissionId,
        },
      });

    if (!existingEnquiry) {
      return res.status(404).json({
        success: false,
        message:
          "Admission enquiry not found",
      });
    }

    const {
      parentName,
      studentName,
      className,
      mobile,
      email,
      location,
      message,
      status,
    } = req.body;

    const updateData = {};

    // ========================================
    // PARENT NAME
    // ========================================

    if (
      parentName !== undefined
    ) {
      if (!parentName.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Parent name is required",
        });
      }

      updateData.parentName =
        parentName.trim();
    }

    // ========================================
    // STUDENT NAME
    // ========================================

    if (
      studentName !== undefined
    ) {
      if (!studentName.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Student name is required",
        });
      }

      updateData.studentName =
        studentName.trim();
    }

    // ========================================
    // CLASS
    // ========================================

    if (
      className !== undefined
    ) {
      if (!className.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Class is required",
        });
      }

      updateData.className =
        className.trim();
    }

    // ========================================
    // MOBILE
    // ========================================

    if (
      mobile !== undefined
    ) {
      if (!mobile.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Mobile number is required",
        });
      }

      updateData.mobile =
        mobile.trim();
    }

    // ========================================
    // EMAIL
    // ========================================

    if (
      email !== undefined
    ) {
      updateData.email =
        email?.trim().toLowerCase() ||
        null;
    }

    // ========================================
    // LOCATION
    // ========================================

    if (
      location !== undefined
    ) {
      updateData.location =
        location?.trim() ||
        null;
    }

    // ========================================
    // MESSAGE
    // ========================================

    if (
      message !== undefined
    ) {
      updateData.message =
        message?.trim() ||
        null;
    }

    // ========================================
    // STATUS
    // ========================================

    if (
      status !== undefined
    ) {
      /*
       * IMPORTANT:
       * These values must match your
       * AdmissionStatus enum exactly.
       */

      const allowedStatuses = [
        "NEW",
        "CONTACTED",
        "FOLLOW_UP",
        "CONVERTED",
        "CLOSED",
      ];

      if (
        !allowedStatuses.includes(
          status
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid admission status",
        });
      }

      updateData.status =
        status;
    }

    // ========================================
    // UPDATE
    // ========================================

    const enquiry =
      await prisma.admissionEnquiry.update({
        where: {
          id: admissionId,
        },

        data: updateData,
      });

    return res.status(200).json({
      success: true,
      message:
        "Admission enquiry updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Update admission error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update admission enquiry",
    });
  }
};

// ==========================================
// DELETE ADMISSION
// DELETE /api/admissions/:id
// ADMIN
// ==========================================

const deleteAdmission = async (
  req,
  res
) => {
  try {
    const admissionId =
      Number(req.params.id);

    if (
      !Number.isInteger(
        admissionId
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid admission enquiry ID",
      });
    }

    // ========================================
    // FIND
    // ========================================

    const existingEnquiry =
      await prisma.admissionEnquiry.findUnique({
        where: {
          id: admissionId,
        },
      });

    if (!existingEnquiry) {
      return res.status(404).json({
        success: false,
        message:
          "Admission enquiry not found",
      });
    }

    // ========================================
    // DELETE
    // ========================================

    await prisma.admissionEnquiry.delete({
      where: {
        id: admissionId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Admission enquiry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete admission error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete admission enquiry",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
};
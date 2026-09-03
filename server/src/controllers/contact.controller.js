// const prisma = require("../config/db");

// // ==========================================
// // CREATE CONTACT ENQUIRY
// // POST /api/contact
// // PUBLIC
// // ==========================================

// const createContact = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       subject,
//       message,
//     } = req.body;

//     // ------------------------------------------
//     // Validation
//     // ------------------------------------------

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email and message are required",
//       });
//     }

//     // ------------------------------------------
//     // Create enquiry
//     // ------------------------------------------

//     const contact = await prisma.contactEnquiry.create({
//       data: {
//         name: name.trim(),
//         email: email.trim().toLowerCase(),
//         phone: phone?.trim() || null,
//         subject: subject?.trim() || null,
//         message: message.trim(),
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Your message has been submitted successfully",
//       data: {
//         id: contact.id,
//       },
//     });
//   } catch (error) {
//     console.error("Create contact enquiry error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to submit your message",
//     });
//   }
// };

// // ==========================================
// // GET ALL CONTACT ENQUIRIES
// // GET /api/contact
// // ADMIN
// // ==========================================

// const getAllContacts = async (req, res) => {
//   try {
//     const contacts = await prisma.contactEnquiry.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       count: contacts.length,
//       data: contacts,
//     });
//   } catch (error) {
//     console.error("Get contacts error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch contact enquiries",
//     });
//   }
// };

// // ==========================================
// // GET CONTACT BY ID
// // GET /api/contact/:id
// // ADMIN
// // ==========================================

// const getContactById = async (req, res) => {
//   try {
//     const contactId = Number(req.params.id);

//     if (!Number.isInteger(contactId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid contact enquiry ID",
//       });
//     }

//     const contact =
//       await prisma.contactEnquiry.findUnique({
//         where: {
//           id: contactId,
//         },
//       });

//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact enquiry not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: contact,
//     });
//   } catch (error) {
//     console.error("Get contact error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch contact enquiry",
//     });
//   }
// };

// // ==========================================
// // UPDATE CONTACT
// // PUT /api/contact/:id
// // ADMIN
// // ==========================================

// const updateContact = async (req, res) => {
//   try {
//     const contactId = Number(req.params.id);

//     if (!Number.isInteger(contactId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid contact enquiry ID",
//       });
//     }

//     const existingContact =
//       await prisma.contactEnquiry.findUnique({
//         where: {
//           id: contactId,
//         },
//       });

//     if (!existingContact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact enquiry not found",
//       });
//     }

//     const {
//       name,
//       email,
//       phone,
//       subject,
//       message,
//       status,
//     } = req.body;

//     const updateData = {};

//     if (name !== undefined) {
//       updateData.name = name.trim();
//     }

//     if (email !== undefined) {
//       updateData.email =
//         email.trim().toLowerCase();
//     }

//     if (phone !== undefined) {
//       updateData.phone =
//         phone?.trim() || null;
//     }

//     if (subject !== undefined) {
//       updateData.subject =
//         subject?.trim() || null;
//     }

//     if (message !== undefined) {
//       updateData.message =
//         message.trim();
//     }

//     // ------------------------------------------
//     // Status
//     // ------------------------------------------

//     if (status !== undefined) {
//       const allowedStatuses = [
//         "NEW",
//         "READ",
//         "REPLIED",
//         "CLOSED",
//       ];

//       if (!allowedStatuses.includes(status)) {
//         return res.status(400).json({
//           success: false,
//           message:
//             "Invalid status. Allowed values: NEW, READ, REPLIED, CLOSED",
//         });
//       }

//       updateData.status = status;
//     }

//     const contact =
//       await prisma.contactEnquiry.update({
//         where: {
//           id: contactId,
//         },
//         data: updateData,
//       });

//     return res.status(200).json({
//       success: true,
//       message: "Contact enquiry updated successfully",
//       data: contact,
//     });
//   } catch (error) {
//     console.error("Update contact error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update contact enquiry",
//     });
//   }
// };

// // ==========================================
// // DELETE CONTACT
// // DELETE /api/contact/:id
// // ADMIN
// // ==========================================

// const deleteContact = async (req, res) => {
//   try {
//     const contactId = Number(req.params.id);

//     if (!Number.isInteger(contactId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid contact enquiry ID",
//       });
//     }

//     const existingContact =
//       await prisma.contactEnquiry.findUnique({
//         where: {
//           id: contactId,
//         },
//       });

//     if (!existingContact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact enquiry not found",
//       });
//     }

//     await prisma.contactEnquiry.delete({
//       where: {
//         id: contactId,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Contact enquiry deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete contact error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete contact enquiry",
//     });
//   }
// };

// // ==========================================
// // EXPORT
// // ==========================================

// module.exports = {
//   createContact,
//   getAllContacts,
//   getContactById,
//   updateContact,
//   deleteContact,
// };


const prisma = require("../config/db");

// ==========================================
// CREATE CONTACT ENQUIRY
// POST /api/contact
// PUBLIC
// ==========================================

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      subject,
      message,
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
        message: "Message is required",
      });
    }

    // ========================================
    // CREATE
    // ========================================

    const contact =
      await prisma.contactEnquiry.create({
        data: {
          name: name.trim(),

          email:
            email?.trim().toLowerCase() ||
            null,

          mobile:
            mobile?.trim() || null,

          subject:
            subject?.trim() || null,

          message: message.trim(),

          isRead: false,
        },
      });

    return res.status(201).json({
      success: true,
      message:
        "Your message has been submitted successfully",
      data: {
        id: contact.id,
      },
    });
  } catch (error) {
    console.error(
      "Create contact enquiry error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to submit your message",
    });
  }
};

// ==========================================
// GET ALL CONTACT ENQUIRIES
// GET /api/contact
// ADMIN
// ==========================================

const getAllContacts = async (req, res) => {
  try {
    const contacts =
      await prisma.contactEnquiry.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error(
      "Get contacts error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch contact enquiries",
    });
  }
};

// ==========================================
// GET CONTACT BY ID
// GET /api/contact/:id
// ADMIN
// ==========================================

const getContactById = async (req, res) => {
  try {
    const contactId =
      Number(req.params.id);

    if (
      !Number.isInteger(contactId)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid contact enquiry ID",
      });
    }

    const contact =
      await prisma.contactEnquiry.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message:
          "Contact enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error(
      "Get contact error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch contact enquiry",
    });
  }
};

// ==========================================
// UPDATE CONTACT
// PUT /api/contact/:id
// ADMIN
// ==========================================

const updateContact = async (req, res) => {
  try {
    const contactId =
      Number(req.params.id);

    if (
      !Number.isInteger(contactId)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid contact enquiry ID",
      });
    }

    const existingContact =
      await prisma.contactEnquiry.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message:
          "Contact enquiry not found",
      });
    }

    const {
      name,
      email,
      mobile,
      subject,
      message,
      isRead,
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
    // EMAIL
    // ========================================

    if (email !== undefined) {
      updateData.email =
        email?.trim().toLowerCase() ||
        null;
    }

    // ========================================
    // MOBILE
    // ========================================

    if (mobile !== undefined) {
      updateData.mobile =
        mobile?.trim() || null;
    }

    // ========================================
    // SUBJECT
    // ========================================

    if (subject !== undefined) {
      updateData.subject =
        subject?.trim() || null;
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
    // READ STATUS
    // ========================================

    if (isRead !== undefined) {
      updateData.isRead =
        isRead === true;
    }

    // ========================================
    // UPDATE
    // ========================================

    const contact =
      await prisma.contactEnquiry.update({
        where: {
          id: contactId,
        },

        data: updateData,
      });

    return res.status(200).json({
      success: true,
      message:
        "Contact enquiry updated successfully",
      data: contact,
    });
  } catch (error) {
    console.error(
      "Update contact error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update contact enquiry",
    });
  }
};

// ==========================================
// MARK AS READ
// PUT /api/contact/:id/read
// ADMIN
// ==========================================

const markAsRead = async (req, res) => {
  try {
    const contactId =
      Number(req.params.id);

    if (
      !Number.isInteger(contactId)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid contact enquiry ID",
      });
    }

    const contact =
      await prisma.contactEnquiry.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message:
          "Contact enquiry not found",
      });
    }

    const updated =
      await prisma.contactEnquiry.update({
        where: {
          id: contactId,
        },

        data: {
          isRead: true,
        },
      });

    return res.status(200).json({
      success: true,
      message:
        "Contact enquiry marked as read",
      data: updated,
    });
  } catch (error) {
    console.error(
      "Mark contact as read error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to mark enquiry as read",
    });
  }
};

// ==========================================
// MARK AS UNREAD
// PUT /api/contact/:id/unread
// ADMIN
// ==========================================

const markAsUnread = async (
  req,
  res
) => {
  try {
    const contactId =
      Number(req.params.id);

    if (
      !Number.isInteger(contactId)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid contact enquiry ID",
      });
    }

    const contact =
      await prisma.contactEnquiry.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message:
          "Contact enquiry not found",
      });
    }

    const updated =
      await prisma.contactEnquiry.update({
        where: {
          id: contactId,
        },

        data: {
          isRead: false,
        },
      });

    return res.status(200).json({
      success: true,
      message:
        "Contact enquiry marked as unread",
      data: updated,
    });
  } catch (error) {
    console.error(
      "Mark contact as unread error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to mark enquiry as unread",
    });
  }
};

// ==========================================
// DELETE CONTACT
// DELETE /api/contact/:id
// ADMIN
// ==========================================

const deleteContact = async (req, res) => {
  try {
    const contactId =
      Number(req.params.id);

    if (
      !Number.isInteger(contactId)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid contact enquiry ID",
      });
    }

    const existingContact =
      await prisma.contactEnquiry.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message:
          "Contact enquiry not found",
      });
    }

    await prisma.contactEnquiry.delete({
      where: {
        id: contactId,
      },
    });

    return res.status(200).json({
      success: true,
      message:
        "Contact enquiry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete contact error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete contact enquiry",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  markAsRead,
  markAsUnread,
  deleteContact,
};
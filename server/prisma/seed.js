require("dotenv").config();

const bcrypt = require("bcryptjs");

const {
  PrismaClient,
} = require("@prisma/client");

const {
  PrismaPg,
} = require("@prisma/adapter-pg");

const requiredVariables = [
  "DATABASE_URL",
  "ADMIN_NAME",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD",
];

const missingVariables = requiredVariables.filter(
  (name) => !process.env[name]?.trim()
);

if (missingVariables.length > 0) {
  console.error(
    `Missing environment variables: ${missingVariables.join(
      ", "
    )}`
  );

  process.exit(1);
}

if (process.env.ADMIN_PASSWORD.length < 8) {
  console.error(
    "ADMIN_PASSWORD must contain at least 8 characters."
  );

  process.exit(1);
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const main = async () => {
  const name = process.env.ADMIN_NAME.trim();

  const email = process.env.ADMIN_EMAIL
    .trim()
    .toLowerCase();

  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD,
    12
  );

  const admin = await prisma.user.upsert({
    where: {
      email,
    },

    update: {
      name,
      password: hashedPassword,
      role: "ADMIN",
      isActive: true,
    },

    create: {
      name,
      email,
      password: hashedPassword,
      role: "ADMIN",
      isActive: true,
    },
  });

  console.log("Admin created or updated successfully.");
  console.log(`Email: ${admin.email}`);
  console.log(`Role: ${admin.role}`);
  console.log(`Active: ${admin.isActive}`);
};

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
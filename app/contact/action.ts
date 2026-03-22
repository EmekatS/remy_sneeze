"use server"

import prisma from "@/lib/db";

const sendMessage = async (data: { name: string; message: string }) => {
  try {
    await prisma.message.create({
      data: {
        name: data.name,
        content: data.message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to save message:", error);
    return { success: false, error: "Failed to send message." };
  }
};

export default sendMessage;
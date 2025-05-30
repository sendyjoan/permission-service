import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createClient = (clientData) => {
    // generate app_key
    clientData.app_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // generate app_secret
    clientData.app_secret = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return prisma.clients.create({
        data: clientData,
    });
};

export default {
    createClient,
    // You can add more client-related methods here
    // e.g., findClientById, updateClient, deleteClient, etc.
};

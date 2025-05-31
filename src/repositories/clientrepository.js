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

const indexClients = () => {
    return prisma.clients.findMany();
};

const getClientByAppKey = (appKey) => {
    return prisma.clients.findUnique({
        where: { app_key: appKey },
    });
};

export default {
    createClient,
    indexClients,
    getClientByAppKey,
    // You can add more client-related methods here
    // e.g., findClientById, updateClient, deleteClient, etc.
};

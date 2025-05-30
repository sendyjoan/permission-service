import clientrepository from "../repositories/clientrepository.js";

async function createClient(clientData) {
    try {
        const client = await clientrepository.createClient(clientData);
        return client;
    } catch (error) {
        console.error("Error creating client:", error);
        throw error; // Re-throw the error for further handling
    }
}

async function indexClients() {
    try {
        const clients = await clientrepository.indexClients();
        return clients;
    } catch (error) {
        console.error("Error fetching clients:", error);
        throw error; // Re-throw the error for further handling
    }
}

export default {
    createClient,
    indexClients,
    // You can add more client-related methods here
    // e.g., findClientById, updateClient, deleteClient, etc.
};
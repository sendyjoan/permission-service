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

export default {
    createClient,
    // You can add more client-related methods here
    // e.g., findClientById, updateClient, deleteClient, etc.
};
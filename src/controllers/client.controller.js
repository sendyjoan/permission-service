import clientService from "../services/client.service.js";

const create = async (req, res) => {
    try {
        const clientData = req.body;
        console.log("Creating client with data:", clientData);
        const client = await clientService.createClient(clientData);
        res.status(201).json(client);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default {
    create,
    // You can add more client-related methods here
    // e.g., findClientById, updateClient, deleteClient, etc.
};
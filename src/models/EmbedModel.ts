import { Model, Schema } from "mongoose";

const schema = new Schema({
    name: String,
        content: {
            embeds: Array,
            components: Array,
            content: String
        }
})

const EmbedComponent = new Model("embeds", schema);

export default EmbedComponent;
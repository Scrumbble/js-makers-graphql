import mongoose from 'mongoose'
import validator from 'validator'

const projectsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 25
        },
        pitch: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120
        },
        coverImage: {
            type: String,
            required: true,
            default: 'https://via.placeholder.com/350x150',
            validate: [v => validator.isURL(v), 'Not a valid image url']
        },
        tags: [String],
        liveUrl: {
            type: String,
            required: true
        },
        githubUrl: {
            type: String
        },
        story: {
            type: String
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        }
    },
    { timestamps: true }
)

/* It's a compound index that sets the project name to be unique within user's own scope.
   In other words, duplicate project name is not allowed in user's own profile. 

   The 1 is just the sorting order it tell in what order do you want to sort this fields on the index itself.

   And the order of the indexes matter. If we change the order it changes the behaviour.
   Generally, objects don't have order but this weird behaviour is because, Mongoose uses something called BSON
   where order matters.
*/
projectsSchema.index({ user: 1, name: 1 }, { unique: true })

export const Project = mongoose.model('project', projectsSchema)
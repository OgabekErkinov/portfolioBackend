const projectModel = require("../models/project.model")


class ProjectController {
    async getAll (req, res) {
            try {
                const allProjects = await projectModel.find()
                res.status(200).json(allProjects)
                    
            } catch (error) {
                res.status(500).json(error)
                    
            }
    }

    async postProject (req, res) {
        try {
            const { projectName, projectCode, projectType, projectHost, projectDescription, projectImage} = req.body

            const newProject = new projectModel({
                projectName,
                projectCode,
                projectType,
                projectHost,
                projectDescription,
                projectImage
            });

            await newProject.save()

            res.status(201).json({
                message : "Project has been upload successfully..!",
                project : newProject
            })
            
        } catch (error) {
            res.status(500).json({ message: "Uploading error : ", error });
            
        }
    }

    async updateProject (req, res) {
        try {
            const { projectName, projectCode, projectType, projectHost, projectDescription, projectImage } = req.body

            const { id } = req.params
    
            const updatedproject = await projectModel.findByIdAndUpdate(
                id,
                {
                    projectName,
                    projectCode,
                    projectType,
                    projectHost,
                    projectDescription,
                    projectImage
                },
                { new : true }
            )
    
            if(!updatedproject){
                return res.status(404).json('Project not found..!')
            }
    
            res.status(200).json({
                message: "Project has been updated successfully..!",
                project: updatedproject
            }
            )
            
        } catch (error) {
            res.status(500).json({ message: "Error updating", error })
            
        }

    }

    async deleteProject(req, res) {
    try {
        const { id } = req.params;

        const deletedProject = await projectModel.findByIdAndDelete(id);

        if (!deletedProject) {
            return res.status(404).json({ message: "Loyiha topilmadi" });
        }

        res.status(200).json({
            message: "Loyiha muvaffaqiyatli o'chirildi",
            project: deletedProject
        });
    } catch (error) {
        res.status(500).json({ message: "O'chirishda xatolik", error });
    }
}
}


module.exports = new ProjectController()
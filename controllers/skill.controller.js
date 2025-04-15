const skillModel = require("../models/skill.model");


class SkillController {

    async getSkills (req, res) {
        try {
            const allSkills = await skillModel.find()
            res.status(200).json(allSkills)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }

    async postSkill (req, res) {
        try {
            const { skillName, skillImage } = req.body

            const newSkill = new skillModel({
                skillName,
                skillImage
            })

            await newSkill.save()

            res.status(201).json({
                message : "Skill has been upload successfully..!",
                project : newSkill
            })
            

        } catch (error) {
            res.status(500).json({ message: "Uploading error : ", error });
            
        }
    }

     async updateSkill (req, res) {
            try {
                const { skillName, skillImage } = req.body
    
                const { id } = req.params
        
                const updatedSkill = await skillModel.findByIdAndUpdate(
                    id,
                    {
                        skillName,
                        skillImage,
                    },
                    { new : true }
                )
        
                if(!updatedSkill){
                    return res.status(404).json('Skill not found..!')
                }
        
                res.status(200).json({
                    message: "Skill has been updated successfully..!",
                    project: updatedSkill
                }
                )
                
            } catch (error) {
                res.status(500).json({ message: "Error updating", error })
                
            }
    
        }
    
        async deleteSkill(req, res) {
        try {
            const { id } = req.params;
    
            const deletedSkill = await skillModel.findByIdAndDelete(id);
    
            if (!deletedSkill) {
                return res.status(404).json({ message: "Skill is not found" });
            }
    
            res.status(200).json({
                message: "Skill is deleted successfully..!",
                project: deletedSkill
            });
        } catch (error) {
            res.status(500).json({ message: "error deleting", error });
        }
    }
}

module.exports = new SkillController()
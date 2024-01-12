import Intros from "../models/intro.js";

// get All 

export const getAll=async (req,res)=>{
try {
    const intros=await Intros.find({})
    res.json(intros)
} catch (error) {
   res.status(500).json(error) 
}
}

// getiD 
export const getiD=async (req,res)=>{
    try {
        const {id}=req.params
        const intro=await Intros.findById(id)
        res.json(intro)
    } catch (error) {
       res.status(500).json(error) 
    }
    }

    // POST
    export const createIntro=async (req,res)=>{
        try {
            const intro=new Intros({
                title:req.body.title, 
                image:req.body.image,
                description:req.body.description,
            })
            await intro.save()
            res.status(200).json("created")
        } catch (error) {
           res.status(500).json(error) 
        }
        }

        // delete 
        export const delIntro=async (req,res)=>{
            try {
                const {id}=req.params
                const deletedIntro=await Intros.findByIdAndDelete(id)
                res.status(200).json("deleted")
            } catch (error) {
               res.status(500).json(error) 
            }
            }
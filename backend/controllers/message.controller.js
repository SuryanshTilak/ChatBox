export const sendMessage = async(req,res) => {
    try{
        const {message} = req.body
        const {id} = req.params
    }
    catch(error){
        console.log("Erro in sendMessage Controller ",error.message)
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
    res.send(req.params.id)
}

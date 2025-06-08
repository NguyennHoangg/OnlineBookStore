const PostNewUser = (req, res) => {
    console.log('data', req.body);
    
    // Add a response to complete the request
    res.status(200).json({ 
        message: 'User data received successfully', 
        data: req.body 
    });
    
    // Or if you want to redirect back to the form:
    // res.redirect('/');
}

module.exports = {PostNewUser};
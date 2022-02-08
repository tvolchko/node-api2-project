// implement your posts router here
const { Router } = require('express');
const router = Router();
const Posts = require('./posts-model')


router.get('/', (req, res) => {
    Posts.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
			console.log(error);
			res.status(500).json({
				message: 'Error retrieving the post',
			});
		});
})

router.get('/:id', (req, res) => {
	Posts.findById(req.params.id)
		.then(posts => {
			if (posts) {
				res.status(200).json(posts);
			} else {
				res.status(404).json({ message: 'Post not found' });
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				message: 'Error retrieving the post',
			});
		});
});

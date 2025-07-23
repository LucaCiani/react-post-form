import { useState } from "react";

function App() {
    const [post, setPost] = useState({
        title: "",
        author: "",
        body: "",
        public: false,
    });

    const handlePostChange = (e) => {
        const newValue =
            e.target.type == "checkbox" ? e.target.checked : e.target.value;
        setPost({
            ...post,
            [e.target.name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        if (!post.author.length || !post.body.length || !post.title.length) {
            alert("Type all data");
            return;
        }
        e.preventDefault();
        console.log(post);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
        };
        fetch(
            "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts",
            requestOptions
        )
            .then((res) => res.json())
            .then((data) => alert("Post inviato con successo!"));
    };

    return (
        <>
            <div className="container my-5">
                <div className="card p-3">
                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-6 mb-3">
                            <label htmlFor="author" className="form-label">
                                Author
                            </label>
                            <textarea
                                onChange={handlePostChange}
                                className="form-control"
                                name="author"
                                id="author"
                                placeholder="Type the author name"
                            ></textarea>
                        </div>
                        <div className="col-6 mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <textarea
                                onChange={handlePostChange}
                                className="form-control"
                                name="title"
                                id="title"
                                placeholder="Type the post title"
                            ></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="body" className="form-label">
                                Body
                            </label>
                            <textarea
                                onChange={handlePostChange}
                                className="form-control"
                                name="body"
                                id="body"
                                placeholder="Type the post body"
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <input
                                onChange={handlePostChange}
                                className="form-check-input"
                                name="public"
                                type="checkbox"
                                value="public"
                                id="public"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="public"
                            >
                                Public
                            </label>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;

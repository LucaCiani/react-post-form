import { useState } from "react";

function App() {
    return (
        <>
            <div className="container my-5">
                <div className="card p-3">
                    <form className="row">
                        <div class="col-6 mb-3">
                            <label for="author" className="form-label">
                                Author
                            </label>
                            <textarea
                                className="form-control"
                                name="author"
                                id="author"
                                placeholder="Type the author name"
                            ></textarea>
                        </div>
                        <div class="col-6 mb-3">
                            <label for="title" className="form-label">
                                Title
                            </label>
                            <textarea
                                className="form-control"
                                name="title"
                                id="title"
                                placeholder="Type the post title"
                            ></textarea>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="body" className="form-label">
                                Body
                            </label>
                            <textarea
                                className="form-control"
                                name="body"
                                id="body"
                                placeholder="Type the post body"
                            ></textarea>
                        </div>
                        <div class="col-12">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value="public"
                                id="public"
                            />
                            <label class="form-check-label" for="public">
                                Public
                            </label>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-primary mt-3"
                                type="button"
                            >
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

import { useState } from 'react';

export default function CollectName({ updateName }) {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (name.trim()) { // Check if name is not just whitespace
            updateName(name);
            setName(""); // Clear the input field after submission
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Please enter your name below:
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

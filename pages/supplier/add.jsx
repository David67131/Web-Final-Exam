import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveBlog = async (data) => {
        const response = await fetch('/api/blogs/articles', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // serialisation
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
        const result = await response.json();   // deserialise
        if (result.error) {
            alert("Error: " + result.error)
        } else {
            alert("Blog saved")
            window.location.href = "/suppliers"
        }
        console.log(result)
        setData(JSON.stringify(data))
    }

    return (
        <div style={{ margin: '1rem' }}>
            <form onSubmit={handleSubmit(saveBlog)}>
                <h1>New Supplier</h1>
                <label htmlFor="title">Supplier Name</label><br />
                <input id="title" {...register("title", { required: true })} placeholder="Please enter supplier name" /><br />

                
                <label htmlFor="title">Address</label><br />
                <input id="title" {...register("title", { required: true })} placeholder="Please enter address " /><br />
                
                <label htmlFor="title">Phone Number</label><br />
                <input id="title" {...register("title", { required: true })} placeholder="Please enter phone number" /><br />
                <input type="submit" />
                <p>{data}</p><br />
            </form>
        </div>
    );
}
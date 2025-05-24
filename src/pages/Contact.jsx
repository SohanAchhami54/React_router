import { Form } from "react-router-dom";

export const ContactFormData=async({request})=>{
    try{
        //request is an object passed to your React Router action function.
        //.formData() is a built-in method that reads the submitted form data.
     const res=await request.formData();
     console.log(res);
     //Object.fromEntries() converts the FormData into a plain JavaScript object.
     const finalResult=Object.fromEntries(res);
     console.log(finalResult);
     return finalResult;
    }catch(error){
        console.log(error);
    }   
};

export const Contact=()=>{
    return(
        <>


    <section className="mt-2 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
      </div>

      <Form  method="POST" action="/contact"
       className="max-w-md mx-auto grid gap-2 border p-6 rounded-xl shadow-2xl bg-white">
        <div className="flex flex-col">
          <label htmlFor="fullname" className="mb-1 font-medium">Fullname</label>
          <input
            className="border p-2 rounded"
            type="text"
            id="fullname"
            name="fullname"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            className="border p-2 rounded"
            type="email"
            id="email"
            name="email"
            
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">Password</label>
          <input
            className="border p-2 rounded"
            type="password"
            id="password"
            name="password"
           
            required
            placeholder="Enter your password"
          />
        </div>

        {/* <div className="flex flex-col">
          <label htmlFor="phonenumber" className="mb-1 font-medium">Phone Number</label>
          <input
            className="border p-2 rounded"
            type="tel"
            id="phonenumber"
            name="phonenumber"
          
            required
            placeholder="Enter your phone number"
          />
        </div> */}
        <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium" >Message</label>
            <textarea className="border" type="text" name="message" id="message" placeholder="Message"
            //  cols="20"
          rows="6"
            ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        
           >
          Submit
        </button>
      </Form>
    </section>













        {/* <section className="mt-5">
            <div className="text-center"> <p>Contact Us.</p> </div>
            <section className="grid justify-center items-center mt-10 ">
                    <form>
                        <label htmlFor="fullname">Fullname:</label>
                        <input  className="border-2" type="text" id="fullname" name="fullname" required
                        placeholder="Enter your name" />

                        <label htmlFor="email">Email:</label>
                        <input className="border-2" type="email" id="email" name="email" required
                        placeholder="Enter your email" />

                        <label htmlFor="password">Password:</label>
                        <input className="border-2" type="password" id="password" name="password" required
                        placeholder="Enter your password" />

                        <label htmlFor="phonenumber">Number:</label>
                        <input className="border-2" type="phonenumber" id="phonenumber" name="phonenumber" required
                        placeholder="Enter your number" />
                        <br />
                        <button className="border px-2 m-1 border-red-500 ">Submit</button>
                    </form>
            </section>
        </section> */}
        </>
    );
};
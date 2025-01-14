import React from "react";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/button";



const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                {/* Použitie MUI Button */}
                
            </form>
            <div className="flex gap-x-4">
      <Calendar aria-label="Date (No Selection)" />
      <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2020-02-03")} />
      <Button color="primary">Button</Button>
    </div>
        </div>
    );
};

export default Contact;
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import * as Form from "@radix-ui/react-form";
import { styled } from "@stitches/react";
import avatar from "../../assets/carousel/pic-2.jpg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function FormUI() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await axios.post(
        "https://formbold.com/s/ozeyp",
        formData
      );
      console.log(response.data);
      alert("Thanks, we will get in touch.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormRoot
      onSubmit={handleSubmit}
      className="contact-form w-full md:w-[350px] border dark:border-slate-700 border-slate-300 my-5 rounded-[10px] dark:bg-[#0c0d0d] bg-slate-100 md:translate-y-[-32%]"
    >
      <div className="form-header p-4 flex gap-4 pt-6">
        <div className="relative">
          <img
            src={avatar}
            alt="avatar"
            className=" avatar size-[40px] rounded-full border-2 border-blue-100 shadow-md"
          />
          <div className="dot size-2 bg-accent rounded-full absolute bottom-[12px] right-0"></div>
        </div>
        <div className="">
          <h4 className="h4 text-secondary">Bernard Quarshie</h4>
          <p className="text-accent">quarshiebernard552@gmail.com</p>
        </div>
      </div>

      <FormField name="Name">
        <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <FormLabel>Name</FormLabel>
          <FormMessage match="valueMissing">Please enter your name</FormMessage>
          <FormMessage match="typeMismatch">Please provide a name</FormMessage>
        </Flex>
        <Form.Control asChild>
          <Input
            type="text"
            required
            className="form-input "
            name="name"
            autoComplete="on"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Control>
      </FormField>

      <FormField name="Email">
        <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">
            Please enter your email
          </FormMessage>
          <FormMessage match="typeMismatch">
            Please provide a valid email
          </FormMessage>
        </Flex>
        <Form.Control asChild>
          <Input
            type="email"
            required
            className="form-input"
            name="email"
            autoComplete="on"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Control>
      </FormField>

      <FormField name="service" className="">
        <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <FormLabel>Service required</FormLabel>
          <FormMessage match="valueMissing">
            Please provide a service type
          </FormMessage>
          <FormMessage match="typeMismatch">
            Please provide a service type
          </FormMessage>
        </Flex>
        <Form.Control asChild>
          <Input
            type="text"
            required
            className="form-input dark:placeholder:text-slate-600/50 placeholder:text-slate-300"
            placeholder="Web development, graphic design..."
            name="message"
            autoComplete="on"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Control>
      </FormField>

      <div className="h-[20px]"></div>

      <Form.Submit asChild className="">
        <div className="dark:bg-[#000] bg-slate-200 p-3 px-4 pb-5 rounded-bl-[10px] rounded-br-[10px]">
          <Button
            disabled={submitting}
            className={`text-white mt-[10px] bg-[#40C335] hover:bg-[rgba(64,195,53,.9)]  focus:ring-2 focus:ring-[rgba(41,235,23,0.5)] 
              ${
                submitting
                  ? "bg-slate-100 cursor-not-allowed text-slate-200 opacity-70"
                  : "bg-[#40C335] cursor-pointer text-white opacity-100"
              } 
            `}
          >
            Submit
          </Button>
        </div>
      </Form.Submit>
    </FormRoot>
  );
}

const FormRoot = styled(Form.Root, {});

const FormField = styled(Form.Field, {
  display: "grid",
  marginBottom: 10,
  padding: "0px 30px",
});

const FormLabel = styled(Form.Label, {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "15px",
  color: "var(--accent)",
  marginTop: 10,
});

const FormMessage = styled(Form.Message, {
  fontSize: 12,
  color: "#ef4444",
  opacity: 0.8,
});

const Flex = styled("div", { display: "flex" });

const inputStyles = {
  // all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
};

const Input = styled("input", {
  ...inputStyles,
  height: 35,
  lineHeight: 1,
});

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: "100%",
});

export default FormUI;

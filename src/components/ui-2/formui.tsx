import * as Form from "@radix-ui/react-form";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import avatar from "../../assets/carousel/pic-2.jpg";

const FormUI = () => (
  <FormRoot
    className="w-full md:w-[350px] border dark:border-slate-700 border-slate-300 my-5 rounded-[10px] dark:bg-[#0c0d0d] bg-slate-200 md:translate-y-[-32%]"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thanks, we will get in touch.");
    }}
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
        <Input type="text" required className="form-input " />
      </Form.Control>
    </FormField>

    <FormField name="email">
      <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <FormLabel>Email</FormLabel>
        <FormMessage match="valueMissing">Please enter your email</FormMessage>
        <FormMessage match="typeMismatch">
          Please provide a valid email
        </FormMessage>
      </Flex>
      <Form.Control asChild>
        <Input type="email" required className="form-input" />
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
        <Input type="text" required className="form-input" />
      </Form.Control>
    </FormField>

    <div className="h-[30px]"></div>

    <Form.Submit asChild className="">
      <div className="dark:bg-[#000] bg-slate-300 p-3 px-4 pb-5 rounded-bl-[10px] rounded-br-[10px]">
        <Button css={{ marginTop: 10 }}>Submit</Button>
      </div>
    </Form.Submit>
  </FormRoot>
);

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
  cursor: "pointer",
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: "100%",

  backgroundColor: "#40C335",
  color: "white",
  boxShadow: `0 2px 5px ${blackA.blackA4}`,
  "&:hover": { backgroundColor: "rgba(64, 195, 53, .9)" },
  "&:focus": { boxShadow: `0 0 0 2px rgba(41, 235, 23, 0.5)` },
});

export default FormUI;

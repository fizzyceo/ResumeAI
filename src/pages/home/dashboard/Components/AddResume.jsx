import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import { useUserResumeStore } from "@/stores/userResume";

const AddResume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { createResume } = useUserResumeStore((state) => state);

  const navigate = useNavigate();
  const onCreate = async () => {
    if (resumeTitle) {
      setIsLoading(true);
      const uuid = uuidv4();
      const data = {
        data: {
          title: resumeTitle,
          resumeId: uuid,
          user_email: user.primaryEmailAddress.emailAddress,
          username: user.fullName,
        },
      };
      await createResume(data);
      navigate(`/dashboard/resume/` + uuid + `/edit`);

      setIsLoading(false);
    }
  };
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center bg-secondary p-10 py-24 rounded-lg h-[300px] transition-all hover:shadow-md hover:border hover:border-dotted"
      >
        <PlusSquare />
        <h3 className="">Add New Resume</h3>
      </div>
      <Dialog open={isOpen}>
        {/* <DialogTrigger onClick={() => setIsOpen(!isOpen)}></DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resume With AI</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Create your custom Resume with the help of AI.
          </DialogDescription>

          <div className="flex flex-col items-start justify-center gap-3">
            <Label htmlFor="title" className="text-right">
              Resume Name
            </Label>

            <Input
              id="title"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
              placeholder="Ex. Software Engineering"
              className="col-span-3"
            />
          </div>

          <DialogFooter>
            <div className="flex justify-end items-center gap-5">
              <Button onClick={() => setIsOpen(!isOpen)} variant={"ghost"}>
                Cancel
              </Button>
              <Button
                className="flex items-center justify-center gap-2"
                disabled={!resumeTitle || isLoading}
                onClick={onCreate}
              >
                {isLoading && <Loader2 className="w-7" />}
                <span>Done</span>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;

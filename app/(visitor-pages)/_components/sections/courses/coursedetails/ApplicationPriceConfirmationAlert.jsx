import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";


export default function ApplicationPriceConfirmationAlert({ fee, onClick, applicationData }) {
    const [registrationFee, setRegistrationFee] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isRegistrationFeeCorrect, setIsRegistrationFeeCorrect] = useState(false);

    const handleRegistrationFee = (e) => {
        setRegistrationFee(e.target.value);
        setIsRegistrationFeeCorrect(e.target.value === fee);
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="default" type="submit">Continue</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <h1 className="text-2xl font-bold">
                            Confirmation
                        </h1>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you ready to submit this application? To join this course, you will be charged a non-refundable registration fee.
                        {applicationData.firstName}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-sm">Please confirm that you are aware of this and that you are ready to proceed by writing the application fee in the box bellow.</span>
                    <div className="flex flex-col ">
                        <Label htmlFor="registrationFee">Write:
                            <span className="font-bold text-red-500"> {fee}</span>
                        </Label>
                        <input
                            type="text"
                            className="border-2 border-black mt-2 rounded-lg px-4 py-2 w-full"
                            name="registrationFee"
                            id="registrationFee"
                            value={registrationFee}
                            onChange={handleRegistrationFee}
                        />
                    </div>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit" disabled={!isRegistrationFeeCorrect}>Submit</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

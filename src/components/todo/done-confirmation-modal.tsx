import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DoneConfirmationDialogProps {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function DoneConfirmationDialog({
  open,
  onConfirm,
  onClose,
}: DoneConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mark as done?</DialogTitle>
          <DialogDescription>
            Are you sure this task is already completed?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={onConfirm}
            className="bg-success-500 hover:bg-success-600"
          >
            Yes, I'm sure
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

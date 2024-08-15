import { useOutletContext } from "react-router-dom";

export function useOpen() {
    return useOutletContext<{ open: boolean }>();
}

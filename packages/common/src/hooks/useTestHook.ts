import { useMemo } from "react";

const useTestHook = () => {
    const welcomeString = 'This is how we share hook logic between web and native';
    const memoWelcomeString = useMemo(() => {
        return 'This is how we share hook logic between web and native';
    }, [welcomeString]);

    return { memoWelcomeString, welcomeString }
};

export default useTestHook;

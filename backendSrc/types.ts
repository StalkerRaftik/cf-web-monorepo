export type ExecutionContext = {
    waitUntil: (promise: Promise<unknown>) => void
};
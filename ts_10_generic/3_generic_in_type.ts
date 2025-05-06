/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = 'hello';

type GenericSimpleTypeDefault<T = string> = T;
const genericStringDefault: GenericSimpleTypeDefault = 'hello';

interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestedAt: Date;
}
interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['a', 'b', 'c'],
    requestedAt: new Date(),
    error: 'error',
};

type StateDefault<T = string> = DoneState<T> | LoadingState | ErrorState;

let stateDefault: StateDefault = {
    data: ['a', 'b', 'c'],
    requestedAt: new Date(),
    error: 'error',
};

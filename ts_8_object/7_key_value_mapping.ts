/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApistatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
};

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
};

type UserApiStatus2 = {
    getUser: GlobalApistatus['getUser'];
    paginateUsers: GlobalApistatus['paginateUsers'];
    banUser: GlobalApistatus['banUser'];
};

type UserApiStatus3 = {
    [key in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApistatus[key];
};

type PickedUserApiStatus = Pick<GlobalApistatus, 'getUser' | 'paginateUsers' | 'banUser'>;

type OmitUserApiStatus = Omit<GlobalApistatus, 'getPosts'>;

/**
 * keyof
 */

type AllKeys = keyof GlobalApistatus; // 'getUser' | 'paginateUsers' | 'banUser' | 'getPosts'
const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
    [key in keyof GlobalApistatus]: GlobalApistatus[key];
};

type KeyOfUserApiStatus2 = {
    // getPosts가 제외된 상태
    [key in Exclude<keyof GlobalApistatus, 'getPosts'>]: GlobalApistatus[key];
};

type KeyOfUserApiStatus3 = {
    // getPosts가 제외된 상태
    [key in Exclude<keyof GlobalApistatus, 'getPosts'>]?: GlobalApistatus[key];
};
//  === type KeyOfUserApiStatus3 = {
//     getUser?: State | undefined;
//     paginateUsers?: State | undefined;
//     banUser?: State | null | undefined;
// };

interface LoadingScreen {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}
type fetchStatus = LoadingScreen | ErrorStatus;
type StatusType = fetchStatus['type']; // 'loading' | 'error'

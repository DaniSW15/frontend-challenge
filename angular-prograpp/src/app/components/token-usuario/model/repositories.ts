export interface TokenRepo {
    url:                   string;
    repositoryURL:         string;
    labelsURL:             string;
    commentsURL:           string;
    eventsURL:             string;
    htmlURL:               string;
    id:                    number;
    nodeID:                string;
    number:                number;
    title:                 string;
    user:                  User;
    labels:                any[];
    state:                 string;
    locked:                boolean;
    assignee:              null;
    assignees:             any[];
    milestone:             null;
    comments:              number;
    createdAt:             Date;
    updatedAt:             Date;
    closedAt:              null;
    author_association:     string;
    activeLockReason:      null;
    body:                  string;
    reactions:             Reactions;
    timelineURL:           string;
    performedViaGithubApp: null;
    stateReason:           null;
    score:                 number;
}

export interface Reactions {
    url:        string;
    totalCount: number;
    the1:       number;
    reactions1: number;
    laugh:      number;
    hooray:     number;
    confused:   number;
    heart:      number;
    rocket:     number;
    eyes:       number;
}

export interface User {
    login:             string;
    id:                number;
    nodeID:            string;
    avatarURL:         string;
    gravatarID:        string;
    url:               string;
    htmlURL:           string;
    followersURL:      string;
    followingURL:      string;
    gistsURL:          string;
    starredURL:        string;
    subscriptionsURL:  string;
    organizationsURL:  string;
    reposURL:          string;
    eventsURL:         string;
    receivedEventsURL: string;
    type:              string;
    siteAdmin:         boolean;
}

/* tslint:disable */
/* eslint-disable */
/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  MoveIssuesToBacklogForBoardRequest,
  MoveIssuesToBacklogRequest,
} from '../models/index';

export interface MoveIssuesToBacklogOperationRequest {
    moveIssuesToBacklogRequest: MoveIssuesToBacklogRequest;
}

export interface MoveIssuesToBacklogForBoardOperationRequest {
    boardId: number;
    moveIssuesToBacklogForBoardRequest: MoveIssuesToBacklogForBoardRequest;
}

/**
 * 
 */
export class BacklogApi extends runtime.BaseAPI {

    /**
     * Move issues to the backlog.   This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may be moved at once.
     * Move issues to backlog
     */
    async moveIssuesToBacklogRaw(requestParameters: MoveIssuesToBacklogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['moveIssuesToBacklogRequest'] == null) {
            throw new runtime.RequiredError(
                'moveIssuesToBacklogRequest',
                'Required parameter "moveIssuesToBacklogRequest" was null or undefined when calling moveIssuesToBacklog().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:board-scope:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/backlog/issue`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['moveIssuesToBacklogRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Move issues to the backlog.   This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may be moved at once.
     * Move issues to backlog
     */
    async moveIssuesToBacklog(requestParameters: MoveIssuesToBacklogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.moveIssuesToBacklogRaw(requestParameters, initOverrides);
    }

    /**
     * Move issues to the backlog of a particular board (if they are already on that board).   This operation is equivalent to remove future and active sprints from a given set of issues if the board has sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most 50 issues may be moved at once.
     * Move issues to backlog for board
     */
    async moveIssuesToBacklogForBoardRaw(requestParameters: MoveIssuesToBacklogForBoardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['boardId'] == null) {
            throw new runtime.RequiredError(
                'boardId',
                'Required parameter "boardId" was null or undefined when calling moveIssuesToBacklogForBoard().'
            );
        }

        if (requestParameters['moveIssuesToBacklogForBoardRequest'] == null) {
            throw new runtime.RequiredError(
                'moveIssuesToBacklogForBoardRequest',
                'Required parameter "moveIssuesToBacklogForBoardRequest" was null or undefined when calling moveIssuesToBacklogForBoard().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:board-scope:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/backlog/{boardId}/issue`.replace(`{${"boardId"}}`, encodeURIComponent(String(requestParameters['boardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['moveIssuesToBacklogForBoardRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Move issues to the backlog of a particular board (if they are already on that board).   This operation is equivalent to remove future and active sprints from a given set of issues if the board has sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most 50 issues may be moved at once.
     * Move issues to backlog for board
     */
    async moveIssuesToBacklogForBoard(requestParameters: MoveIssuesToBacklogForBoardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.moveIssuesToBacklogForBoardRaw(requestParameters, initOverrides);
    }

}

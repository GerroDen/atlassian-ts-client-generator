
# PagedListUserDetailsApplicationUser

A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.

## Properties

Name | Type
------------ | -------------
`endIndex` | number
`items` | [Array&lt;UserDetails&gt;](UserDetails.md)
`maxResults` | number
`size` | number
`startIndex` | number


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



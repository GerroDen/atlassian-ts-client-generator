
# Incident

Data related to a specific incident in a specific container that the incident is present in. Must specify at least one association to a component. 

## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`id` | string
`updateSequenceNumber` | number
`affectedComponents` | Array&lt;string&gt;
`summary` | string
`description` | string
`url` | string
`createdDate` | string
`lastUpdated` | string
`severity` | [IncidentSeverity](IncidentSeverity.md)
`status` | string
`associations` | [Array&lt;Associations&gt;](Associations.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



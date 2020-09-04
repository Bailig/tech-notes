# React performance optimization

1. append /?react_perf to url and use chrome performance tab to analyze
1. limit the depth of the render tree for frequently updated component
   - instead of updating top component, we can use redux to directly update the lower children to avoid unnecessary renders of parents
1. turn on highlight updates setting of react dev tool to see what components are updated
   - use it de detect unnecessary component renders

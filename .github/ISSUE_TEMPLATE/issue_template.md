name: Feature Issue
about: Report an issue related to a specific feature
title: '[Feature] '
labels: ''
assignees: ''

body:
  - type: dropdown
    id: feature
    attributes:
      label: Feature
      description: Which feature does this issue relate to?
      options:
        - Login
        - Payment
        - Cart
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Provide a detailed description of the issue.
      placeholder: Describe the issue...
    validations:
      required: true
  - type: markdown
    attributes:
      value: |
        **Note**: Issues not following this template will be closed. See [CONTRIBUTING.md](link-to-contributing-md) for the guideline.

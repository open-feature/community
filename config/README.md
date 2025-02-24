# Community Configuration

As handling permissions, assignments, etc. gets more and more complicated, the bigger a community gets,
we decided to opt-in for a GitOps approach for community management.

We are using [Peribolos](https://docs.prow.k8s.io/docs/components/cli-tools/peribolos/) which is developed and maintained by Kubernetes.
They actively use it to manage their own communities, see [kubernetes/org](https://github.com/kubernetes/org).

To reduce efforts and duplication we decided to adapt the generation approach to our needs.

## Overview

We are using our [community-tools](https://github.com/open-feature/community-tooling/) to generate a proper configuration based on our opinionated one for peribolos.

It is also available as a docker image to be used locally:

```console
docker run --rm -v $(pwd):/config ghcr.io/open-feature/community-tooling:v0
```

## Configuration Structure

Each directory within the `config` directory represents a GitHub Organization (therefore we will refrain from it as `org-folder`).
This directory will only be picked up when there is a `org.yaml` within the directory.

Within this `org-folder` we can have multiple teams/workgroups.
Those teams are represented with their subfolder (the name of the team) containing a `workgroup.yaml`.

The `community-tools` will fetch these configurations and generate a proper peribolos configuration based on this.

### org.yaml

The `org.yaml` follows the default peribolos configuration format.

It will be used to:

- define members and admins of the organization
- define default settings for the organization such as:
  - members allowed to create repositories
  - default permissions for members
  - ...
- repositories and their configuration
- global teams

#### special teams

There are 3 special teams within the `org.yaml`.

### &lt;workgroup&gt;/workgroup.yaml

Each workgroup represents an organizational unit, which needs to work on the same repositories.

A workgroup consists of following roles:

- approvers (triage permission)
- maintainers (maintain permission)
- admins (admin permission)

Based on the definition above a `workgroup.yaml` has the following structure:

```yaml
repos: # a list of repositories the team has access to
  - repo-1
  - repo-2

approvers:
  - approver-1

maintainers:
  - maintainer-1

admins:
  - admins-1
```

Repositories are not mutually exclusive to workgroups.
Hence, multiple workgroups can have access to the same repositories.

> **Note**
> Use admins carefully and only when it is really needed.
> Admins can change secrets etc.

Based on this configuration we will generate 3 teams:

- &lt;workgroup&gt;-approvers
- &lt;workgroup&gt;-maintainers
- &lt;workgroup&gt;-admins

Furthermore, we will assign those 3 teams also permissions for the defined repositories.

#### Example

Let's say we have a `workgroup.yaml` within `org-folder/workgroup`.

The content is:

```yaml
repos:
  - repo-1

approvers:
  - approver-1

maintainers:
  - maintainer-1

admins:
  - admins-1
```

Following Teams will be generated, with the respective permissions for the repository `repo-1`:

- workgroup-approvers: triage
- workgroup-maintainers: maintain
- workgroup-admins: admin

## How to ...

### ... add a member to the organization?

Add them within the `org.yaml` of the GitHub Organization to the list of members.

```yaml
members:
  - <githubHandle>
```

### ... generate a new workgroup?

Generate a directory within the `org-folder` of the GitHub Organization with the team name.
Add a `workgroup.yaml` defining the repos, approvers, maintainers, and admins.

```yaml
repos:
  - repo-1

approvers:
  - approver-1

maintainers:
  - maintainer-1

admins:
  - admins-1
```

### ... set a member as emeritus?

> **Warning**
> First discuss this with the community and the member you want to set to emeritus state.

Remove the member from all `workgroup.yaml` files, and other teams within the `org.yaml`.

If the user used to be an Admin of the organization moves them from `admins` to `members` in the `org.yaml`.

Add the user to the emeritus-team definition within `org`.yaml` of the desired GitHub Organization.

### ... create a new repository?

Within the `org.yaml` of the designated organization, add an entry in the `repos` section.
As an example, we want to add a new repository called `peribolos-test`, we will add the following:

```yaml
repos:
  # ...
  peribolos-test:
    description: "my peribolos test"
  # ...
```

test

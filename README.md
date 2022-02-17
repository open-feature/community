# OpenFeature project governance

[![Roadmap](https://img.shields.io/static/v1?label=Roadmap&message=public&color=green)](https://github.com/orgs/open-feature/projects/1)
[![Contributing](https://img.shields.io/static/v1?label=Contributing&message=guide&color=blue)](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md)

This document describes the bootstrap governance process under which the project will operate
until the final governance process is identified.

> :warning: This is a temporary (aka bootstrap) governance document that
> is effective until the project is fully established.
> See [this issue](https://github.com/openfeatureflags/governance/issues/11) for the scope of the full governance document.

## Project manifesto

### Goal

Our goal is to create an open standard for feature flag management to support a robust feature flag ecosystem using cloud native technologies.

### Scope

The scope includes but not limited to:

- An **open standard** that allows adopters and vendors to easily integrate with a spec-compliant feature flag solutions
- A **vendor-agnostic ecosystem** for users, application developers, SREs, and vendors
- Unified API and SDK
- Developer-first, cloud-native reference implementation
- Extensibility for open source and commercial offerings
- Adoption by the open source and proprietary projects listed on the [Cloud Native Landscape](https://landscape.cncf.io/)

### Why OpenFeature?

There are many existing solutions, open source or not.
In the industry there are multiple common issues limiting wide adoption:

- **Many SDKs** doing the same thing, but slightly differently
- SDKs are generally open source but have no ecosystem
- **Different APIs** in implementations, hence it is difficult to migrate between them
- **Limited interoperability** across implentations 
- **Missing integration** with observability tools (e.g. OpenTelemetry)

## CNCF membership

Our goal is to join the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) as a sandbox project shortly after the inception of OpenFeature.
Should it be accepted, the project will establish governance along with the CNCF best practices, 
and then target reaching the incubating and graduated statuses in the foundation.

### Project Differentiators

This project is more than just copy and paste of existing solutions

* Current solutions often have **eval logic in SDKs**.
  This may require **updating all your apps** for a new rule type.
* Config in Feature Flagging tools that are **separate from the rest of the app** make it harder to use approaches like GitOps. 
* Config and rule changes are **hard to integrate into observability** tools 
* Information to decide on features already available in observability tools is **not leveraged and collected twice**
* No standardized format for defining feature flagging rules

## Roadmap

The project roadmap is available [here](https://github.com/orgs/openfeatureflags/projects/1).
New initiatives for the roadmap can be suggested via marking an issue as `roadmap-proposal` and then reaching a community decision as documented in _Decision Making_.

- [Pending roadmap suggestions](https://github.com/search?q=org%3Aopenfeatureflags+label%3Aroadmap-proposal&type=issues)

## Governing Committee

In March 2022 _Project Maintainers_ will assign seven individuals to be members of the _Bootstrap Governing Committee_.
This is a **temporary** arrangement that should be replaced by an elected governing body before March 2024. 
At least 3 governing board members should be elected by March 2023.

The _Bootstrap Governing Committee_ is responsible for
representing the project, 
making a final decision if a consensus cannot be reached (see _Decision Making_),
handling the Code of Conduct escalations,
defining and approving with the project members the final governance model,
and organizing elections for the elected governance board body.

## Decision making

Decisions are made by a consensus of _Project Members_ and [Interested Parties](./interested-parties.md).
If this consensus cannot be reached,
the decision can be made by the plain majority vote of _Bootstrap Governing Committee Members_.

<!-- TODO: List founding members or delegate the decision to CDF TAG App Delivery or another entity -->

Key discussions and decisions should happen asynchronously in communication channels like GitHub Issues, discussions or pull requests.
Technical decisions are expected to be documented in the
[OpenFeature Specification](https://github.com/openfeatureflags/spec).
The community decisions should be documented in this Governance repository.

## Meetings

The project conducts [regular project meetings](https://openfeatureflags.github.io/home/participate/#project-meetings) 
hosted by its maintainers and contributors.
These meetings are used as additional discussion and consensus building
but not for making decisions without prior discussion in async channels.

## Contributing

All contributors are welcome!
Please see the contributing guidelines
[here](https://github.com/openfeatureflags/.github/blob/main/CONTRIBUTING.md).

### Contributing prerequisites (CLA/DCO)

At the moment the project does not define a
Contributor License Agreement or 
[Developer Certificate of Origin (DCO)](https://wiki.linuxfoundation.org/dco).
By submitting pull requests submitters acknowledge they grant the [Apache License v2](./LICENSE) to the code and that they are eligible to grant this license for all commits submitted in their pull requests.

### Project roles

The following project roles are defined at the moment:
_Project member_,
_Maintainer_,
_Bootstrap Governance Committee Member_.
These roles are defined below.

#### Project members

Project members are a group of contributors with the minimum entry bar.
They are welcome to take leadership in initiatives
and to participate in the project's open governance and decision making process.

While the project is in the bootstrap governance phase,
any individual who declares their interest in the [Interested Parties list](./interested-parties.md) will considered as project member and invited to the project's GitHub organization.
It may require signing a Contributor License Agreement should it be introduced in the project.

#### Maintainers

Maintainers take responsibility for maintaining OpenFeature projects and repositories.
They review and integrate changes submitted to their repositories,
and also ensure that the decision making process is followed.
Maintainer status can be granted within a single repository or within the entire GitHub organization.

Maintainers are elected by project members according to the _Decision Making_ process.
They are expected to demonstrate substantial code or non-code contributions to the project,
and to also be able to dedicate some time to maintenance and regular participation in the community.

In addition to the elected maintainer roles,
3 individuals get the maintainer status at the inception of the project:

- Michael Beemer, @beeme1mr, Dynatrace
- Alois Reitbauer, @AloisReitbauer, Dynatrace/CNCF/Keptn
- Oleg Nenashev, @oleg-nenashev, Dynatrace/CDF/Jenkins/Keptn

#### Bootstrap Governance Committee Members

> :warning: This is a **temporary role** while the bootstrap governance is active.
In the future this role will be replaced by an elected _Governance Committee Member_ role.

Bootstrap Governance Committee members are responsible for representing the project in communications with organizations,
including but not limited to contributor companies, adopters, vendors and foundations.
Apart from the representative role,
they can make a final decision when a consensus cannot be reached.

In March 2022 this role will be assigned by project maintainers to **seven** individuals listed in [Interested Parties](./interested-parties.md).
Each company/organization should have less than 50% of the seats,
and hence an organization can have only up to three seats.
The project maintainers are also responsible to review their nominations with the community,
and to do the best effort to address any feedback/concerns.

## Code of Conduct

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation. We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

The project and its community abide by [the Code of Conduct](https://github.com/open-feature/.github/blob/main/CODE_OF_CONDUCT.md).
This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org),
version 2.1, available
[here](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html).

## License

OpenFeature is an open specification and open source project.
Unless another license is specified explicitly,
all contents in this GitHub organization are licensed under [Apache License v2](./LICENSE).


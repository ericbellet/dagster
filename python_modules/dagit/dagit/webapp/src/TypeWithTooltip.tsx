import * as React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { Code, Position, Tooltip, Text } from "@blueprintjs/core";
import { TypeWithTooltipFragment } from "./types/TypeWithTooltipFragment";

interface ITypeWithTooltipProps {
  type: TypeWithTooltipFragment;
}

export default class TypeWithTooltip extends React.Component<
  ITypeWithTooltipProps,
  {}
> {
  static fragments = {
    TypeWithTooltipFragment: gql`
      fragment TypeWithTooltipFragment on Type {
        name
        description
      }
    `
  };

  render() {
    if (this.props.type.description && this.props.type.description.length > 0) {
      return (
        <Tooltip
          content={
            <TypeDescription>{this.props.type.description}</TypeDescription>
          }
        >
          <TypeName>{this.props.type.name}</TypeName>
        </Tooltip>
      );
    } else {
      return <Code>{this.props.type.name}</Code>;
    }
  }
}

const TypeName = styled(Code)`
  cursor: help;
`;

const TypeDescription = styled(Text)`
  max-width: 300px;
`;

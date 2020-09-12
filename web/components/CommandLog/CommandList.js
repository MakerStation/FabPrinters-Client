import React, {Component} from 'react';
import Command from '../../base_components/command'
import {fetchAllCommands} from '../../../src/endpoints'


const CommandList = (props) => {
  const resourceCommandLog = fetchAllCommands(props.id)
  const data = resourceCommandLog.read()

  return (
    <div>
      {data.map(command => (
        <Command command={command.command} date={command.date} />
      ))}
    </div>
  )
}

export default CommandList

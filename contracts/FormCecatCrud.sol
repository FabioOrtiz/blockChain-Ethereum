// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./FormCecatInscription.sol";

/**
 * @title Inscription
 * @dev This is a task manager for Form Inscription
 *      Create Task
 *      Delete Task
 *      "Stuff" Task
 */
contract FormCecatCrud is FormCecatInscription {

    uint public inscriptionCounter = 0;

    constructor(){
        createInscription('Test 1',
                          20171020001,
                          444,
                          'a@c.com',
                          404,
                          102,
                          'Investigation Special',
                          29);
    }

    function createInscription(string memory _projectName, 
                               uint64 _studentCode,
                               uint16 _signatureCode,
                               string memory _studentEmail,
                               uint16 _investigationGroupCode,
                               uint64 _professorCode,
                               string memory _projectObjective,
                               uint16 _codeBD) public{
        setName(_projectName);
        setStudentCode(_studentCode);
        setSignatureCode(_signatureCode);
        setStudentEmail(_studentEmail);
        setInvestigationGroupCode(_investigationGroupCode);
        setProfessorCode(_professorCode);
        setProjectObjective(_projectObjective);
        setCodeBD(_codeBD);
        store(inscriptionCounter);
        inscriptionCounter++;
    }
}
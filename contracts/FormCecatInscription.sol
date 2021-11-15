// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./FormCecat.sol";

/**
 * @title FormCecatInscription
 * @dev Full get and set of one a request
 */
contract FormCecatInscription is FormCecat {
    Request request;
    
    function setName (string memory name) public{
        request.projectName = name;
    }
    
    function setStudentCode (uint64 studentCode) public{
        request.studentCode = studentCode;
    }
    
    function setSignatureCode (uint16 signatureCode) public{
        request.signatureCode = signatureCode;
    }
    
    function setStudentEmail (string memory studentEmail) public{
        request.studentEmail = studentEmail;
    }
    
    function setInvestigationGroupCode (uint16 investigationGroupCode) public{
        request.investigationGroupCode = investigationGroupCode;
    }
    
    function setProfessorCode (uint64 professorCode) public{
        request.professorCode = professorCode;
    }
    
    function setProjectObjective (string memory projectObjective) public{
        request.projectObjective = projectObjective;
    }
    
    function setCodeBD (uint16 codeBD) public{
        request.codeBD = codeBD;
    }
    
    function store(uint direction) public {
        assignments[direction] = request;
    }
    
    function retrieve(uint direction) public view returns (Request memory){
        return assignments[direction];
    }
}

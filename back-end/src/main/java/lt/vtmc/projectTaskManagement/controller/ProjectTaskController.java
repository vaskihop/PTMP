package lt.vtmc.projectTaskManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.service.ProjectService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/projects")
@Api("value=project")
public class ProjectTaskController {
	
	@Autowired
	ProjectService projectService;
	
	@GetMapping
	@ApiOperation(value="Get projects", notes="Returns registered projects")
	public List<ProjectEntity> getProjects(){
		return projectService.getProjects();
	}
	
	@GetMapping("/{projectId}")
	@ApiOperation(value="Get project by id", notes="Returns registered project by project id")
	public ProjectEntity getProjectById(@PathVariable Long projectId) {
		return projectService.findProjecttById(projectId);
	}
	
	@PostMapping
	@ApiOperation(value="Create projects", notes="Creates project")
	public void addProject(@RequestBody Project project) {
		projectService.addProject(project);
	}
	
	@DeleteMapping("/{projectId}")
	@ApiOperation(value="Delete user by id", notes="Deletes project by project id")
	public void deleteProject(@PathVariable Long projectId) {
		projectService.deleteProject(projectId);
	}
	
	@PutMapping("/{projectId}")
	@ApiOperation(value="Update project by id", notes="Updates project by project id")
	public void updateProject(@PathVariable Long projectId, @RequestBody Project project) {
		projectService.updateArtist(projectId, project);
	}

}

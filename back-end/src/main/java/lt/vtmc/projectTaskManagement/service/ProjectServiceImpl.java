package lt.vtmc.projectTaskManagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectRepository repo;

	@Override
	public List<ProjectEntity> getProjects() {
		List<ProjectEntity> projectList=new ArrayList<ProjectEntity>();
		repo.findAll().forEach(projectList::add);
		return projectList;
	}

	@Override
	public void addProject(Project project) {		
		repo.save(new ProjectEntity(project.getProjectTitle(), project.getProjectDescription(), project.getProjectState(), project.getGeneralTaskQuantity(), project.getInProgressTaskQuantity()));

	}

	@Override
	public void deleteProject(Long projectId) {
		repo.deleteById(projectId);

	}

	@Override
	public ProjectEntity findProjecttById(Long projectId) {
//		kadanors mes exception
		return repo.findById(projectId).orElse(null);
	}

	@Override
	public void updateArtist(Long projectId, Project project) {
		ProjectEntity updatedProject=findProjecttById(projectId);
		updatedProject.setProjectTitle(project.getProjectTitle());
		updatedProject.setProjectDescription(project.getProjectDescription());
		updatedProject.setProjectState(project.getProjectState());
		updatedProject.setGeneralTaskQuantity(project.getGeneralTaskQuantity());
		updatedProject.setInProgressTaskQuantity(project.getInProgressTaskQuantity());

		repo.save(updatedProject);
	}

}
